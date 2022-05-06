import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PageComponent } from './page/page.component';
import {FileuploadComponent} from "./insta/fileupload/fileupload.component";

const routes: Routes = [
  {path: 'page', component: PageComponent},
  {path: '',   redirectTo: '/page', pathMatch: 'full' },
  {path: 'upload', component: FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
