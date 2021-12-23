import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaContainerComponent } from './insta-container/insta-container.component';
import { PicturesComponent } from './pictures/pictures.component';
import { IconsComponent } from './icons/icons.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    InstaContainerComponent,
    PicturesComponent,
    IconsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InstaContainerComponent
  ]
})
export class InstaModule { }
