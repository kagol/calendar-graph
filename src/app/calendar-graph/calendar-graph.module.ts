import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ng-devui';

import { CalendarGraphComponent } from './calendar-graph.component';
import { ColorCubeModule } from '@shared/components/color-cube/color-cube.module';
import { ColorPipeModule } from '@shared/pipes/color-pipe/color-pipe.module';

@NgModule({
  declarations: [
    CalendarGraphComponent
  ],
  imports: [
    CommonModule,
    ColorCubeModule,
    TooltipModule,
    ColorPipeModule
  ],
  exports: [
    CalendarGraphComponent
  ]
})
export class CalendarGraphModule { }
