import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ng-devui';

import { CalendarGraphComponent } from './calendar-graph.component';
import { ColorCubeModule } from '../shared/components/color-cube/color-cube.module';

@NgModule({
  declarations: [CalendarGraphComponent],
  imports: [
    CommonModule,
    ColorCubeModule,
    TooltipModule
  ],
  exports: [
    CalendarGraphComponent
  ]
})
export class CalendarGraphModule { }
