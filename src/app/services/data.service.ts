import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//global overloading headers
const option={
  headers:new HttpHeaders()
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails: any

  currentuser = ''

  currentacno = ''

  constructor(private http: HttpClient) {

  }

  saveddetails() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }
    if (this.currentuser) {
      localStorage.setItem("currentuser", JSON.stringify(this.currentuser))
    }
    if (this.currentacno) {
      localStorage.setItem("currentacno", JSON.stringify(this.currentacno))
    }
  }

  // getdetails(){
  //   if(localStorage.getItem('database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
  //   }
  //   if(localStorage.getItem('currentacno')){
  //     this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
  //   }
  // }


  gettoken() {
    const token = JSON.parse(localStorage.getItem('token') || '')

    let headers = new HttpHeaders()

    if(token){
      option.headers=headers.append('access-token', token)                    //header overload
  }

  return option

  }

  register(acno: any, uname: any, psw: any) {                               //req as api call
    const data = {                            //data to be passed to body of api
      acno, uname, psw
    }
    return this.http.post('http://localhost:3000/register', data)           //asynchronous=>return, api req

  }


  login(acno: any, psw: any) {

    const data = { acno, psw }
    return this.http.post('http://localhost:3000/login', data)

  }

  deposit(acno: any, password: any, amount: any) {
    const data = { acno, psw: password, amount }
    return this.http.post('http://localhost:3000/deposit', data,this.gettoken())
  }

  withdraw(acno: any, password: any, amount: any) {
    const data={ acno,psw:password,amount}
    return this.http.post('http://localhost:3000/withdraw',data,this.gettoken())  //get token difined .
 
  }

  //to return transaction details

  gettransaction(acno: any) {
    const data={acno}
    return this.http.post('http://localhost:3000/gettransaction',data,this.gettoken())

  }

  deleteacc(acno:any){
    return this.http.delete('http://localhost:3000/deleteacc/'+acno,this.gettoken())  // params added

  }

}
