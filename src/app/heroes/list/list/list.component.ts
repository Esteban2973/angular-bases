import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false
})
export class ListComponent {

  public heroesName:string[]=[
    'Tangiro',
    'Nezuko',
    'Zenitsu',
    'Inosuke',
    'Giyu',
    'Shinobu',
    'Kanao',
    'Tomioka',
    'Muichiro',
    'Sanemi',
    'Mitsuri',
    'Tengen',
    'Gyomei',
    'Kokushibo',
    'Muzan'
  ];
  public deleteHero?:string;

  removeLastHero():void{
    this.deleteHero = this.heroesName.pop();

  }

}
