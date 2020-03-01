import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarPanel } from './components/calendar-panel.component';
import { ColorCube } from './components/color-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarPanel,
    ColorCube,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
