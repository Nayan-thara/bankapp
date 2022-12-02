import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your perfect banking partner" //string interpolation (_1)
  
  //  data="Account no" //property binding

  acno="" //event binding using $event
  psw=""

  userDetails:any={
    1000:{acno:1000,username:"nivya",password:123,balance:0},
    1001:{acno:1001,username:"amritha",password:123,balance:0},
    1002:{acno:1002,username:"abhay",password:123,balance:0},
    1003:{acno:1003,username:"sree",password:123,balance:0}
  }


  //rendering method  
  login(a:any,b:any){
    
    // console.log(a.value); // a elemnt an so athile value kittan .value use cheyanam
    
  this.acno=a.value
  this.psw=b.value
  
    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    if(acno in userDetails){
       if(psw==userDetails[acno]["password"]){
        alert("login success")
       }
       else{
        alert('incurrect password')
       }
    }
    else{
      alert('incorrect username')
    }
   
  }


//event binding //dolar event
  // login(){
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //      if(psw==userDetails[acno]["password"]){
  //       alert("login success")
  //      }
  //      else{
  //       alert('incurrect password')
  //      }
  //   }
  //   else{
  //     alert('incorrect username')
  //   }
   
  // }
  //$event
  // acnoChange(event:any){
  //   this.acno=event.target.value}

  // pswChange(event:any){
  //   this.psw=event.target.value
  // }


}
