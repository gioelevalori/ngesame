import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  { path : 'detail/:id' , component : DetailComponent },
  { path : 'list' , component : ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
