import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login/login.component";

const navigationRoutes: Routes = [
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(navigationRoutes)
  ],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
