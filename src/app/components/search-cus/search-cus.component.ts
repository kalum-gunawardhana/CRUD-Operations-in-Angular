import { Component } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-cus',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-cus.component.html',
  styleUrl: './search-cus.component.css'
})
export class SearchCusComponent {
  searchTerm: string = ''; // Input for the search bar
  customer: Customer | null = null; // Customer data to display

  constructor(private customerService: CustomerService) {}

  searchCustomer(): void {
    this.customerService.getCustomerByName(this.searchTerm).subscribe(
      (data: Customer) => {
        this.customer = data; // Set data to the customer card
      },
      (error) => {
        alert('Customer not found!');
        this.customer = null; // Reset the card if no customer is found
      }
    );
  }
}
