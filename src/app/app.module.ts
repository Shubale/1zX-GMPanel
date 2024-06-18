import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatGridListModule} from '@angular/material/grid-list'

import { GMPanelComponent } from './gmpanel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    GMPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		MatGridListModule
  ],
  providers: [],
  bootstrap: [GMPanelComponent]
})
export class AppModule { }
