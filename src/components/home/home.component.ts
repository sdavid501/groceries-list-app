import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { Grocery } from '../../models/grocery';
import { trigger, transition, animate, keyframes } from '@angular/animations';
import * as kf from './keyframes';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardAnimator',[
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => flipIn', animate(1000, keyframes(kf.flipIn)))
    ])
  ]
})
export class HomeComponent implements OnInit {

  animationState: string;
  itemVal: any;
  unitVal: any;
  startAnimation(state){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimation() {
    this.animationState = '';
  }

  groceries: Grocery[] = new Array<Grocery>();
  all: boolean = true; 
  check: boolean; 
  rem : boolean;
  constructor(private groService: GroceryService) { }

  ngOnInit() {
    this.updateGroceries();
  }

  updateGroceries(){
    this.groceries = this.groService.getGroceries();
  }
  
  addGrocery(i: any, q: any){
    this.animationState= "flipIn";
    this.groService.addGrocery({item: i, qty: q, status: false});
    this.updateGroceries();
    this.itemVal ="";
    this.unitVal ="";
    $('html,body').animate({scrollTop: document.body.scrollHeight}, 'fast');
  }

  dropGrocery(){
    this.groService.dropGrocery();
    this.updateGroceries();
  }

  updateGroceryStatus(checked: any, index: any){
    this.startAnimation('swing');
    var data = this.groceries[index];
    data.status = checked;
    this.groService.updateGrocery(data, index);
    if(this.all) 
    {
      this.groceries = Object.assign([],this.groService.getGroceries());
    }
    else if(this.check){
      this.groceries = Object.assign([],this.groService.getGroceries());
      var gro = new Array<Grocery>();
      this.groceries.forEach(e=>{
        if(e.status){
          gro.push(e);
        }
      });
      this.groceries = Object.assign([],gro);
    }
    else if(this.rem){
      this.groceries = Object.assign([],this.groService.getGroceries());
      var gro = new Array<Grocery>();
      this.groceries.forEach(e=>{
        if(!e.status){
          gro.push(e);
        }
      });
      this.groceries = Object.assign([],gro);
    }
    // else if(this.check) 
    // {this.displayOption("check");}
    // else if(this.rem) 
    // {this.displayOption("rem");}
    
    console.log(this.groService.getGroceries());
  }

  toggleCotainer(){
    alert("sssss");
  }
  displayOption(i: any) {
    this.groceries = Object.assign([],this.groService.getGroceries());
    if(i=="all"){
     this.all=true; this.check = false; this.rem =false;
     return;
    }
     var gro = new Array<Grocery>();
     if(i=="check"){
      this.all=false; this.check = true; this.rem =false;
     this.groceries.forEach(e=>{
       if(e.status){
         gro.push(e);
       }
     });
    }
     if(i=="rem"){
      this.all=false; this.check = false; this.rem =true;
     this.groceries.forEach(e=>{
       if(!e.status){
         gro.push(e);
       }
     });
    }
     this.groceries = Object.assign([],gro);
  }

  
}
