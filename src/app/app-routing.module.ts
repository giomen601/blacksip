import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrdenComponent } from './pages/orden/orden.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "orden",
    component: OrdenComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
