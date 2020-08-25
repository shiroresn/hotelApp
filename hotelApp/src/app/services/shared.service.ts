import { Injectable, ViewChild } from '@angular/core';
import { Food } from '../Models/Food';
import { Table } from '../Models/Table';
import { Order, Item } from '../Models/Order';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    this.addDemoData();
  }

  isLoggedIn = true;

  foods: Food[] = new Array();
  tables: Table[] = new Array();
  selectedTable: Table = new Table();

  selectedOrder: Order = new Order();
  orderNumberOfPeople = 1;

  addDemoData() {
    //Starters
    var s1 = new Food();
    s1.id = 1;
    s1.name = "Paneer Chilly";
    s1.price = 230;
    s1.type = "Veg";
    s1.subtype = "Starter";
    s1.imageUrl = "./assets/PaneerChilly.jpg"

    this.foods.push(s1);

    var s2 = new Food();
    s2.id = 2;
    s2.name = "Soyabean Chilly";
    s2.price = 180;
    s2.type = "Veg";
    s2.subtype = "Starter";
    s2.imageUrl = "./assets/SoyabeanChilly.jpg"

    this.foods.push(s2);

    // Tables
    var t1 = new Table();
    t1.id = 1;
    t1.capacity = 6;
    t1.occupancy = 0;
    t1.name = "Corner Window Table";
    t1.status = "Available";

    var t2 = new Table();
    t2.id = 2;
    t2.capacity = 4;
    t2.occupancy = 0;
    t2.name = "Center Table";
    t2.status = "Available";

    var t3 = new Table();
    t3.id = 3;
    t3.capacity = 6;
    t3.occupancy = 0;
    t3.name = "Maharaja Table";
    t3.status = "Available";

    var t4 = new Table();
    t4.id = 4;
    t4.capacity = 2;
    t4.occupancy = 0;
    t4.name = "Couple Table";
    t4.status = "Available";

    this.tables.push(t1, t2, t3, t4)


  }

  addFoodToCart(food: Food) {
    var item = new Item();
    item.food = food;
    item.quantity = 1;

    this.selectedOrder.items.push(item);
  }

  calculateTotalPayable() {

    var totalPrice: number = 0;

    this.selectedOrder.items.forEach(item => {
      var totalItemPrice: number = 0;
      totalItemPrice = item.food.price * item.quantity;

      totalPrice += totalItemPrice;

    });

    this.selectedOrder.totalPayable = totalPrice;
  }

  onCancel() {
    this.selectedOrder = new Order();
  }

  onPay() {
    this.selectedOrder = new Order();
    this.selectedTable.occupancy = this.orderNumberOfPeople;
    this.selectedTable.status="Busy";
    var tempTable = new Table();
    this.selectedTable = Object.assign({}, tempTable);
    this.orderNumberOfPeople = 1;
  }

  cleanTable(id) {
    this.tables[id - 1].occupancy = 0;
    this.tables[id - 1].status = "Available";
  }


}
