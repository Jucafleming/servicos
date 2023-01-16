import { CursosComponent } from './cursos.component';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';




import { CursosServices } from './cursos.service';




@NgModule({
  declarations: [
    CursosComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[CursosComponent],
  //providers: [CursosServices],
})
export class CursosModule { }
