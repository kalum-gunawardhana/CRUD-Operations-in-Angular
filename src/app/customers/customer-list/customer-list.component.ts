import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent implements OnInit{
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  editCustomer(id: number): void {
    this.router.navigate(['/customers/edit', id]);
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter((c) => c.id !== id);
    });
  }
}
