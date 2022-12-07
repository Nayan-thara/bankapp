import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your perfect banking partner" //string interpolation (_1)
  


  acno="" 
  psw=""
//database
  userDetails:any={
    1000:{acno:1000,username:"nivya",password:123,balance:0},
    1001:{acno:1001,username:"amritha",password:123,balance:0},
    1002:{acno:1002,username:"abhay",password:123,balance:0},
    1003:{acno:1003,username:"sree",password:123,balance:0}
  }

constructor(private router:Router,private ds:DataService){}
  
  login(){
    var acno=this.acno
    var psw=this.psw
    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("incorrect username or password")
    }

  }
  
  // acnoChange(event:any){
  //   this.acno=event.target.value}

  // pswChange(event:any){
  //   this.psw=event.target.value
  // }


}
