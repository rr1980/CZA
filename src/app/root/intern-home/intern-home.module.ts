import { NgModule } from '@angular/core';
import { InternHomeRoutingModule, routedComponents } from './intern-home-routing.module';

@NgModule({
  imports: [
    InternHomeRoutingModule
  ],
  declarations: [routedComponents]
})
export class InternHomeModule { }
