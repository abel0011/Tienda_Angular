import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../admin/components/login/login.component';
import { RegisterComponent } from '../admin/components/register/register.component';

const routes: Routes = [
{
  path:'',
  component:RegisterComponent
}  ,
{
  path:'Login',
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
