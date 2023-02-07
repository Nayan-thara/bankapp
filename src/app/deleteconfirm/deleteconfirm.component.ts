import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {


//event creation

@Output() onCancel=new EventEmitter() //@output -> child to parent(dashboard) ,  can only  be shared to selector ,selector in dashboard
@Output() onDelete=new EventEmitter()

@Input() item:String | undefined  //parent to child decorator

cancel(){
  this.onCancel.emit()  //event call using emit
}
delete(){
  this.onDelete.emit(this.item)  //sharing acno with parent

}

}
