import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';

const routes: Routes = [
  {
    path: '',
    component: MainGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
