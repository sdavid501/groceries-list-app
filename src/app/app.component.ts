import { Component, AfterViewInit, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes } from '@angular/animations';
import * as kf from '../components/home/keyframes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cardAnimator',[
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(5000, keyframes(kf.swing))),
      transition('* => flipIn', animate(5000, keyframes(kf.flipIn)))
      // transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight)))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Groceries App';
  animationState: string;

  ngOnInit() {
    this.animationState = 'flipIn';
    
  }

  startAnimation(state: string){
    console.log(state);
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimation() {
    this.animationState = '';
  }
}
