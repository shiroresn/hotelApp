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

  isLoggedIn = false;

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

    var s3 = new Food();
    s3.id = 3;
    s3.name = "Chicken Chilly";
    s3.price = 320;
    s3.type = "NonVeg";
    s3.subtype = "Starter";
    s3.imageUrl = "./assets/Chicken Chilly.jpg"

    this.foods.push(s3);

    var s4 = new Food();
    s4.id = 4;
    s4.name = "Paneer Lajavab";
    s4.price = 420;
    s4.type = "Veg";
    s4.subtype = "MainCourse";
    s4.imageUrl = "./assets/Paneer Lajavab.jpg"

    this.foods.push(s4);

    var s5 = new Food();
    s5.id = 5;
    s5.name = "Mutter Paneer";
    s5.price = 250;
    s5.type = "Veg";
    s5.subtype = "MainCourse";
    s5.imageUrl = "./assets/Mutter Paneer.jpg"

    this.foods.push(s5);

    var s6 = new Food();
    s6.id = 6;
    s6.name = "Murg Musallam";
    s6.price = 460;
    s6.type = "NonVeg";
    s6.subtype = "MainCourse";
    s6.imageUrl = "./assets/Murg Musallam.jpg"

    this.foods.push(s6);

    var s7 = new Food();
    s7.id = 7;
    s7.name = "Bajra Roti";
    s7.price = 40;
    s7.type = "NA";
    s7.subtype = "MainCourse";
    s7.imageUrl = "./assets/Bajra Roti.jpg"

    this.foods.push(s7);

    var s8 = new Food();
    s8.id = 8;
    s8.name = "Roti";
    s8.price = 30;
    s8.type = "NA";
    s8.subtype = "MainCourse";
    s8.imageUrl = "./assets/Roti.jpg"

    this.foods.push(s8);

    var s9 = new Food();
    s9.id = 9;
    s9.name = "Tandoor Roti";
    s9.price = 45;
    s9.type = "NA";
    s9.subtype = "MainCourse";
    s9.imageUrl = "./assets/Tandoor Roti.jpg"

    this.foods.push(s9);

    var s10 = new Food();
    s10.id = 10;
    s10.name = "Vanilla Ice Cream";
    s10.price = 180;
    s10.type = "NA";
    s10.subtype = "Dessert";
    s10.imageUrl = "./assets/Vanilla Ice Cream.jpg"

    this.foods.push(s10);

    var s11 = new Food();
    s11.id = 11;
    s11.name = "Chocolate Ice Cream";
    s11.price = 220;
    s11.type = "NA";
    s11.subtype = "Dessert";
    s11.imageUrl = "./assets/Chocolate Ice Cream.jpg"

    this.foods.push(s11);


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
    var foodFound=false;
    this.selectedOrder.items.forEach(item => {
      if(item.food.id==food.id)
      {
        foodFound=true;
        item.quantity++;
      }
    });

    if(!foodFound)
    {
      var item = new Item();
      item.food = food;
      item.quantity = 1;
  
      this.selectedOrder.items.push(item);
    }
  
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
    alert("Payment Successful for Rs."+this.selectedOrder.totalPayable+"/-")
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
