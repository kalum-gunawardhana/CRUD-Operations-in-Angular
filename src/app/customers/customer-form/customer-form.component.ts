import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  imports: [],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = { name: '', email: '', address: '' }

  isEditMode: boolean = false;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.customerService.getCustomerById(+id).subscribe((data) => {
        this.customer = data;
      });
    }
  }

  saveCustomer(): void {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer.id!, this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      });
    } else {
      this.customerService.createCustomer(this.customer).subscribe(() => {
        this.router.navigate(['/customers']);
      });

    }
  }

}
