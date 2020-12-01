import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CalendarGraphModule } from './calendar-graph/calendar-graph.module'; // 使用未打包的模块
// import { CalendarGraphModule } from '../../dist/calendar'; // 使用打包后的模块
// import { CalendarGraphModule } from 'ng-calendar-graph'; // 使用npm库
import { CalendarGraphModule } from 'projects/calendar/src/lib/calendar-graph.module'; // 从library引入模块

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarGraphModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
