import { NgModule } from '@angular/core';
import { InternHomeRoutingModule, routedComponents } from './intern-home-routing.module';
import { DxButtonModule, DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    InternHomeRoutingModule,
    DxButtonModule,
    DxSchedulerModule,
    DxTemplateModule,
    MatSliderModule
  ],
  declarations: [routedComponents]
})
export class InternHomeModule { }
