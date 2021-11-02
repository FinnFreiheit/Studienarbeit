import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationRoutingModule } from '../navigation-routing.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavigationModule { }
