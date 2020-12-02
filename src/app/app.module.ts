import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CalendarGraphModule } from '../../dist/ng-calendar-graph'; // 使用打包后的模块
// import { CalendarGraphModule } from 'ng-calendar-graph'; // 使用npm库
import { CalendarGraphModule } from 'ng-calendar-graph/calendar-graph/calendar-graph.module'; // 从library引入模块

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
