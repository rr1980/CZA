import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'guest', loadChildren: () => import('./root/guest-home/guest-home.module').then(m => m.GuestHomeModule)
  },
  {
    path: 'intern', loadChildren: () => import('./root/intern-home/intern-home.module').then(m => m.InternHomeModule)
  },
  {
    path: '',
    redirectTo: '/guest',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [];
