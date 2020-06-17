import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    NavComponent
  ],
  declarations: [
    NavComponent
  ]
})
export class SharedModule {}
