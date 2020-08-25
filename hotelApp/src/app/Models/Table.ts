export class Table{
    id:number;
    capacity:number;
    name:string;
    occupancy:number;
    servingOrder:number;
    orderHistory:number[]=new Array();
    status:string; //available, busy
}