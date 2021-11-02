import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login/login.component";

const appRoutes: Routes = [
  { path: 'page/login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
