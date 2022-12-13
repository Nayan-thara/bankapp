import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your perfect banking partner" //string interpolation (_1)
  


  // acno="" 
  // psw=""
//database
  userDetails:any={
    1000:{acno:1000,username:"nivya",password:123,balance:0},
    1001:{acno:1001,username:"amritha",password:123,balance:0},
    1002:{acno:1002,username:"abhay",password:123,balance:0},
    1003:{acno:1003,username:"sree",password:123,balance:0}
  }

constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]})
  
  login(){
    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw
   
    if(this.loginForm.valid){
      const result=this.ds.login(acno,psw)
      if(result){
        alert('login success')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("incorrect username or password")
      }

    }
    else{
      alert('invalid form')
    }
    

  }
  
  // acnoChange(event:any){
  //   this.acno=event.target.value}

  // pswChange(event:any){
  //   this.psw=event.target.value
  // }


}
