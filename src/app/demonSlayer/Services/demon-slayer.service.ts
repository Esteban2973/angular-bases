import { Injectable } from '@angular/core';
import { CharacterInterface } from '../Interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DemonSlayerService {

  public DemonSlayercharacter:CharacterInterface []=[{
    id: uuid(),
    name: 'Tanjiro',
    power: 100
  },{
    id: uuid(),
    name: 'Zenitsu',
    power: 50
  },{
    id: uuid(),
    name: 'Inosuke',
    power: 70
  },{
    id: uuid(),
    name: 'Nezuko',
    power: 90
  },{
    id: uuid(),
    name: 'Giyu',
    power: 80,
  }];

  characterEmited(NewCharacter:CharacterInterface):void{
    const characterNew:CharacterInterface = { id: uuid(), ...NewCharacter }
    this.DemonSlayercharacter.push( characterNew );
    // console.log('characterEmited', characterNew);
  }

  // deleteCharacter(index:number):void{
  //   console.log('deleteCharacter', index);
  //   this.DemonSlayercharacter.splice(index,1);
  // }

  deledCharacterById(id:string):void{
    // console.log('deleteCharacter', id);
    this.DemonSlayercharacter = this.DemonSlayercharacter.filter(character => character.id !== id);

  }




}
