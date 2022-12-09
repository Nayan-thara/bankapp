import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  acno=''
  psw=''
  amnt=''

  acno1=''
  psw1=''
  amnt1=''

  user=''

  constructor(private ds:DataService){
    //access the current user name
    this.user=this.ds.currentuser
    
  }

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)
    
    if(result){ // if there exist a value it is considered as true
      alert(`${amnt} credited to your account and total balance is ${result}`)

    }
    else{
      alert("incorrect acno or password")
    }

  }

  withdraw(){
    var acno=this.acno1
    var psw=this.psw1
    var amnt=this.amnt1

    const result=this.ds.withdraw(acno,psw,amnt)
    
    if(result){
      alert(`${amnt} is debited and your balance is ${result}`)
    }
  
  }



}
