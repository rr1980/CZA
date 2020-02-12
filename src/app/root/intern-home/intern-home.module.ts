import { NgModule } from '@angular/core';
import { InternHomeRoutingModule, routedComponents } from './intern-home-routing.module';
import { DxButtonModule } from 'devextreme-angular';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    InternHomeRoutingModule,
    DxButtonModule,
    MatSliderModule
  ],
  declarations: [routedComponents]
}) 
export class InternHomeModule { }
