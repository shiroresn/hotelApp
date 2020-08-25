import { Injectable } from '@angular/core';
import { Food } from '../Models/Food';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    this.addDemoData();
  }

  isLoggedIn = true;

  foods:Food[]=new Array();

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

  }
}
