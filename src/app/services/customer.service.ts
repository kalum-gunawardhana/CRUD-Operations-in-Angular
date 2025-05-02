import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }

  // Fetch all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  // Delete customer by ID
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
