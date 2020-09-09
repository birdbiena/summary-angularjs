import { NgModule } from '@angular/core';
import { QypComponent } from './qyp.component';
import { QypRoutingModule } from './qyp-routing.module';



@NgModule({
  declarations: [QypComponent],
  imports: [
    QypRoutingModule
  ],
  exports: [QypComponent]
})
export class QypModule { }
