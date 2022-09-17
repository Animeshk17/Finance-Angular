import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-payment',
  templateUrl: './registration-payment.component.html',
  styleUrls: ['./registration-payment.component.css']
})
export class RegistrationPaymentComponent implements OnInit {

  upiPin : string = "112233";
  premiumCharge : number = 1000;
  basicCharge : number = 500;
  registrationAmount : number;
  selectedCardType : string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.selectedCardType = localStorage.getItem('registrationCardType')!;
    if(this.selectedCardType == "Basic"){
      this.registrationAmount = 500;
    }else {
      this.registrationAmount = 1000;
    }
  }

  onSubmit(paymentForm:any){
    console.log(paymentForm.value);
    var userEnteredPin = paymentForm.value.pin;
    console.log(userEnteredPin);
    if(userEnteredPin == this.upiPin){
      alert("Payment Processed. Registration Successful!");
      this.router.navigateByUrl("/login");
    }else{
      alert("Wrong UPI Pin. Please Re-enter you PIN");
    }
  }

}
