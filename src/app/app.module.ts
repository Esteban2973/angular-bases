import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { DemonSlayerModule } from './demonSlayer/demonSlayer.module';
import { HeroesModule } from './heroes/heroes.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DemonSlayerModule,
    CounterModule,
    BrowserModule,
    AppRoutingModule,
    HeroesModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
