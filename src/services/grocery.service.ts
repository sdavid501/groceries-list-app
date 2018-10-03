import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  items: Grocery[] = new Array<Grocery>();
constructor() { }
addGrocery(item: Grocery){
  this.items.push(item);
}

removeGrocery(i:any){
  this.items.splice(i,1);
}

getGroceries(): Grocery[] {
 return this.items;
}

updateGrocery(item: Grocery, index: any){
  this.items.splice(index,1, item);
}

dropGrocery() {
  this.items.splice(0, this.items.length);
}
}
