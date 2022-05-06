import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstaContainerComponent } from './insta-container/insta-container.component';
import { PicturesComponent } from './pictures/pictures.component';
import { IconsComponent } from './icons/icons.component';
import { CommentsComponent } from './comments/comments.component';
import { StoreModule } from '@ngrx/store';
import * as fromInsta from './store/insta.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InstaEffects } from './store/insta.effects';
import { FileuploadComponent } from './fileupload/fileupload.component';
import {NgxFileDropModule} from "ngx-file-drop";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    InstaContainerComponent,
    PicturesComponent,
    IconsComponent,
    CommentsComponent,
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromInsta.instaFeatureKey, fromInsta.reducer),
    EffectsModule.forFeature([InstaEffects]),
    NgxFileDropModule,
    RouterModule
  ],
  exports: [
    InstaContainerComponent,
    FileuploadComponent
  ]
})
export class InstaModule { }
