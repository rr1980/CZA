import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    RootComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
