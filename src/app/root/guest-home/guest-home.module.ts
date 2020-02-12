import { NgModule } from '@angular/core';
import { GuestHomeRoutingModule, routedComponents } from './guest-home-routing.module';

@NgModule({
  imports: [
    GuestHomeRoutingModule
  ],
  declarations: [routedComponents]
})
export class GuestHomeModule { }
