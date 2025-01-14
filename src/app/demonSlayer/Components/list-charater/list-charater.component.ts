import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterface } from '../../Interfaces/character.interface';
import { DemonSlayerService } from '../../Services/demon-slayer.service';

@Component({
  selector: 'demonSlayer-list-charater',
  standalone: false,
  templateUrl: './list-charater.component.html',
})

export class ListCharaterComponent {


  @Input()
  public listCharacter:CharacterInterface[] = [];

  @Output()
  onDeleteCharacter:EventEmitter<string> = new EventEmitter();


  deleteCharacter(id:string|undefined):void{
    // poner el (id?:string)
    // if(!id) return;
    // console.log(id);
    this.onDeleteCharacter.emit(id);
  }


}
