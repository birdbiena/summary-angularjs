import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLibComponetComponent } from './my-lib-componet.component';


const routes: Routes = [
  {
    path: '',
    component: MyLibComponetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLibComponetRoutingModule {
  constructor() {
    console.log(222222);
  }
}
