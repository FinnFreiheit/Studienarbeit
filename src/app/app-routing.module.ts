import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'page', component: PageComponent},
  { path: '',   redirectTo: '/page', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
