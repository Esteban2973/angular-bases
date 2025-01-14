import { Component } from '@angular/core';

import { DemonSlayerService } from '../../Services/demon-slayer.service';
import { CharacterInterface } from '../../Interfaces/character.interface';

@Component({
  selector: 'app-demonSlayer-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  constructor( private DemonSlayerService: DemonSlayerService) {}

  get charactersList(): CharacterInterface[] {
    return [...this.DemonSlayerService.DemonSlayercharacter];
  }

  onDeleteCharacterMain(Id: string): void {
    this.DemonSlayerService.deledCharacterById(Id);
  }

  onNewCharacterMain(character: CharacterInterface): void {
    this.DemonSlayerService.characterEmited(character);
  }

}
