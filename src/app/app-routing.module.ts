import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sub Applications
import { App1SharedModule } from './../../projects/kubernetes/src/app/app.module';
import { App2SharedModule } from './../../projects/management/src/app/app.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'app1',
        loadChildren: () => import('./../../projects/kubernetes/src/app/app.module').then(m => m.App1SharedModule)
      },
      {
        path: 'app2',
        loadChildren: () => import('./../../projects/management/src/app/app.module').then(m => m.App2SharedModule)
      },
      {
        path: '',
        redirectTo: 'app1',
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
