import { Injectable } from '@angular/core';
import { Food } from '../Models/Food';
import { Table } from '../Models/Table';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    this.addDemoData();
  }

  isLoggedIn = true;

  foods:Food[]=new Array();
  tables:Table[]=new Array();


  addDemoData(){
    //Starters
    var s1 = new Food();
    s1.id=1;
    s1.name="Paneer Chilly";
    s1.price=230;
    s1.type="Veg";
    s1.subtype="Starter";
    s1.imageUrl="./assets/PaneerChilly.jpg"
    
    this.foods.push(s1);

    var s2 = new Food();
    s2.id=2;
    s2.name="Soyabean Chilly";
    s2.price=180;
    s2.type="Veg";
    s2.subtype="Starter";
    s2.imageUrl="./assets/SoyabeanChilly.jpg"

    this.foods.push(s2);

    // Tables
    var t1 = new Table();
    t1.id=1;
    t1.occupancy=6;
    t1.name="Corner Window Table";
    t1.status="Available";

    var t2 = new Table();
    t2.id=2;
    t2.occupancy=4
    t2.name="Center Table";
    t2.status="Available";

    var t3 = new Table();
    t3.id=3;
    t3.occupancy=4;
    t3.name="Maharaja Table";
    t3.status="Available";

    var t4 = new Table();
    t4.id=4;
    t4.occupancy=2;
    t4.name="Couple Table";
    t4.status="Available";

    this.tables.push(t1,t2,t3,t4)


  }
}
