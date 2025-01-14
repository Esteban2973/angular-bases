import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../Interfaces/character.interface';
import { DemonSlayerService } from '../../Services/demon-slayer.service';

@Component({
  selector: 'demonSlayer-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {


  @Output()
  onNewCharacter:EventEmitter<CharacterInterface> = new EventEmitter();



  public addCharacter: CharacterInterface ={
    name: '',
    power: 0,
  }

  emitNewCharacter(): void {
    if(this.addCharacter.name.length === 0 ) return;
    this.onNewCharacter.emit(this.addCharacter);

    this.addCharacter = {
      name: '',
      power: 0
    }
  }
}
