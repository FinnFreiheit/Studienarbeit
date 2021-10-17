import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaContainerComponent } from './insta-container/insta-container.component';



@NgModule({
  declarations: [
    InstaContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InstaContainerComponent
  ]
})
export class InstaModule { }
