import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtpVerification } from 'src/Models/OtpVerification';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  o : OtpVerification = {phoneNumber: "", otp: ""}
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(otpVerificationForm : any){
    var correctOTP = "123456";
    var enteredOTP = otpVerificationForm.value.otp;
    console.log(enteredOTP);
    if(enteredOTP == correctOTP){
      alert("Verification successful! Please reset your password.");
      this.router.navigateByUrl('forgotPassword');
    }else {
      alert("Wrong OTP :( ")
    }
  }

  getOTP(){
    alert("Enter the OTP sent on your Mobile Number");
  }

}
