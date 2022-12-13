import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''

  // acno1=''
  // psw1=''
  // amnt1=''

  user=''

  constructor(private ds:DataService,private fb:FormBuilder){
    //access the current user name
    this.user=this.ds.currentuser
    
  }
  depositForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  withdrawForm=this.fb.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],psw1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){
      const result=this.ds.deposit(acno,psw,amnt)
    
    if(result){ // if there exist a value it is considered as true
      alert(`${amnt} credited to your account and total balance is ${result}`)

    }
    else{
      alert("incorrect acno or password")
    }
     }
     else{
      alert('invalid form')
    }

  }

  withdraw(){
    var acno=this.withdrawForm.value.acno1
    var psw=this.withdrawForm.value.psw1
    var amnt=this.withdrawForm.value.amnt1

    if(this.withdrawForm.valid){
      const result=this.ds.withdraw(acno,psw,amnt)
    
    if(result){
      alert(`${amnt} is debited and your balance is ${result}`)
    }
    }
    else{
      alert('invalid form')
    }
  }



}
