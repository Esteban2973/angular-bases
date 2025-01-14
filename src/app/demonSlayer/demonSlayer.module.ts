import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ListCharaterComponent } from './Components/list-charater/list-charater.component';
import { AddCharacterComponent } from './Components/add-character/add-character.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainPageComponent,
    ListCharaterComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class DemonSlayerModule { }
