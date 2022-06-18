import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInforComponent } from './customer-infor/customer-infor.component';

const routes: Routes = [
{
  path:'',
  component:CustomerInforComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
