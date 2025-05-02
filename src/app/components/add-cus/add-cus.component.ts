import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-cus',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-cus.component.html',
  styleUrl: './add-cus.component.css'
})
export class AddCusComponent {
  customer = {
    name: '',
    email: '',
    address: '',
  };

  constructor(private customerService: CustomerService) { }

  onSubmit(): void {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      alert('Customer added successfully!');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.customer = {
      name: '',
      email: '',
      address: '',
    };
  }
}
