import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // uname=''
  // acno=''
  // psw=''

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {//dependency injection

  }
  //MODEL DRIVEN FORM
  registerForm = this.fb.group({ uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]], acno: ['', [Validators.required, Validators.pattern('[0-9]+')]], psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]] })//input fields of form - uname,acno,psw

  register() {
    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    //checking if the form valid or not
    if(this.registerForm.valid){
      const result = this.ds.register(acno, uname, psw)  // calling register in servce
    if (result) {
      alert("registration success")
      this.router.navigateByUrl('')
    }
    else {
      alert("registration failed")
      this.router.navigateByUrl('')
    }

    }
    else{
      alert('invalid form')
    }

  }
}
