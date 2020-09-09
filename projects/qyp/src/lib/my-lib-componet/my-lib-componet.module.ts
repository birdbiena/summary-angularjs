import { NgModule } from '@angular/core';

import { MyLibComponetComponent } from './my-lib-componet.component';
import { MyLibComponetRoutingModule } from './my-lib-componet-routing.module';

@NgModule({
  declarations: [
    MyLibComponetComponent
  ],
  imports: [
    MyLibComponetRoutingModule
  ],
  exports: [
    MyLibComponetComponent
  ]
})
export class MyLibComponetModule { }
