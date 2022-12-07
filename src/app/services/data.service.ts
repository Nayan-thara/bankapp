import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"nivya",password:123,balance:0},
    1001:{acno:1001,username:"amritha",password:123,balance:0},
    1002:{acno:1002,username:"abhay",password:123,balance:0},
    1003:{acno:1003,username:"sree",password:123,balance:0}
  }

  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username:uname,password:psw,balance:0}
      return true
    }
  }


  login(acno:any,psw:any){
    
    var userDetails=this.userDetails
    if(acno in userDetails){
       if(psw==userDetails[acno]["password"]){
        return true
      
       }
       else{
        return false
       }
    }
    else{
      return false
    }
   
  }

  deposit(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount) //convert to interger type
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
        userDetails[acno]['balance']+=amnt
        return userDetails[acno]['balance']
      }
      else{
        return false
      }
      
    }
    else{
      return false
    }
  }

  withdraw(acno:any,password:any,amount:any){
    var userDetails=this.userDetails
    var amnt=parseInt(amount)
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
        userDetails[acno]['balance']-=amnt
        return userDetails[acno]['balance']
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

}
