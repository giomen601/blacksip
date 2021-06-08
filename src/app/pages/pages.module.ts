import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrdenComponent } from './orden/orden.component';
import { FormsModule } from '@angular/forms';

import  { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, OrdenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
