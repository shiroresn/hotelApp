import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Item } from '../Models/Order';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public sharedService:SharedService) { }

  @ViewChild("f1",{static:true}) f1: NgForm;


  ngOnInit(): void {
    this.unvalidateForm();
  }

  numberOfPeople=[1,2,3,4,5,6];

  reduceQuant(item:Item,index:number){
    item.quantity--;
    if(item.quantity==0)
    {
      this.removeItem(index);
    }
  }

  addQuant(item:Item)
  {
    item.quantity++;
  }

  removeItem(index)
  {
   this.sharedService.selectedOrder.items.splice(index,1);
  }

  setSelectedTable(){
    console.log(this.sharedService.selectedOrder.servingTable);
    
    this.sharedService.tables.forEach(table => {
      if(table.id==this.sharedService.selectedOrder.servingTable)
      {
        this.sharedService.selectedTable=table;
      }
      
    });
  }

  checkNumberOfPeopleValid(no:number){
    // console.log(no);
    // console.log(this.sharedService.selectedTable.capacity);
    // console.log(no<=this.sharedService.selectedTable.capacity);
    

    return no<=this.sharedService.selectedTable.capacity;
  }

  unvalidateForm(){
    this.f1.form.markAsUntouched();
  }

}
