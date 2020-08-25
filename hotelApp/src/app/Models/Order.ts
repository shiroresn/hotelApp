import { Food } from './Food';

export class Order{
    id:number;
    cratedOn:Date;
    items:Item[]=new Array();
    servingTable:number;
    totalPayable:number;
}

export class Item{
    food : Food;
    quantity : number;
}