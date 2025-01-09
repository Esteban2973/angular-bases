import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: false
})
export class HeroComponent {

  public name:string = 'Superman';
  public age:number = 30;

  get capitaliceName():string {
    return this.name.toUpperCase();
  }

  getherodescription():string {

    return `The hero ${this.name} is ${this.age} years old.`;
  }

  changeHero():void {
    this.name = 'Batman';
  }

  changeAge():void {
    this.age = 40;
  }


  resetForm():void{
    this.name = 'Superman';
    this.age = 30;
  }


}
