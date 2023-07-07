import { NgModule } from '@angular/core';
import { CPFPipe } from './cpf.pipe';

@NgModule({
  declarations: [CPFPipe],
  exports: [CPFPipe]
})
export class PipesModule { }