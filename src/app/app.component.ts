import { Component } from '@angular/core';
import { CustomerService } from '../app/service/customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent {
  title = 'Clients app- proba parlem';
  constructor(private customerService: CustomerService){}
  ngOnInit() {
    this.customerService.findAll().subscribe(res =>{
    })
  }
}
