import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorCubeComponent } from './color-cube.component';



@NgModule({
  declarations: [ColorCubeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColorCubeComponent
  ]
})
export class ColorCubeModule { }
