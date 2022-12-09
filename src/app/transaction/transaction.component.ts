import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  acno:any
  transaction:any

  constructor(private ds:DataService){//page open avumbo thane kanikan constructeryl koduknam
    this.acno=this.ds.currentacno
    this.transaction=this.ds.gettransaction(this.acno)
    // console.log(this.transaction);
    

  }

}
