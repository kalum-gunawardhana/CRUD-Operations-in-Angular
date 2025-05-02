import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
@Component({
  selector: 'app-view-cus',
  imports: [MatTableModule],
  templateUrl: './view-cus.component.html',
  styleUrl: './view-cus.component.css'
})
export class ViewCusComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'action'];
  dataSource: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  // Fetch customers from the API
  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

  // Delete a customer
  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        alert('Customer deleted successfully!');
        this.loadCustomers(); // Reload data after deletion
      });
    }
  }
}
