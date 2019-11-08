import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";




@Injectable({
  providedIn: 'root'
})
export class CustomerService {
	

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;
form = new FormGroup({
     $key: new FormControl(null),
     Name: new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input
     email: new FormControl('', Validators.email),// to check if the value inside the input is an email
     mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
     adress: new FormControl(''),
     zip: new FormControl(''),
     city:new FormControl('')
         });
 getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }
insertCustomer(customer){
                 this.customerList.push({
                         Name: customer.Name,
                         email: customer.email,
                         mobile: customer.mobile,
                         adress:customer.adress,
                         zip: customer.zip,
                         city:customer.city
                  });
         }
         populateForm(customer){
    this.form.setValue(customer);
  }
deleteCustomer($key: string){
    this.customerList.remove($key);
  }

updateCustomer(customer){
                 this.customerList.update(customer.$key,{
                         Name: customer.Name,
                         email: customer.email,
                         mobile: customer.mobile,
                         adress:customer.adress,
                         zip: customer.zip,
                         city:customer.city
                  });
         }
     }