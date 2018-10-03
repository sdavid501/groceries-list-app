import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/route.routing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GroceryService } from '../services/grocery.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
}
@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule.forRoot(routes), AngularFontAwesomeModule
  ],
  providers: [GroceryService, {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
