import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QypComponent } from './qyp.component';

const routes: Routes = [
  {
    path: '',
    component: QypComponent,
    children: [
      {
        path: 'aaaa',
        // loadChildren: './my-lib-componet/my-lib-componet.module#MyLibComponetModule'
        loadChildren: () => import('./my-lib-componet/my-lib-componet.module').then(m => m.MyLibComponetModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QypRoutingModule {
  constructor() {
    console.log('1111111111');
  }
}
