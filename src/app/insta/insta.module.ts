import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaContainerComponent } from './insta-container/insta-container.component';
import { PicturesComponent } from './pictures/pictures.component';
import { IconsComponent } from './icons/icons.component';



@NgModule({
  declarations: [
    InstaContainerComponent,
    PicturesComponent,
    IconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InstaContainerComponent
  ]
})
export class InstaModule { }
