import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `


    <h3> {{ counter }} </h3>

    <button (click)="crecerEn1(+1)" > +1 </button>
    <button (click)="reset()" > Reset </button>
    <button (click)="crecerEn1(-1)" > -1 </button>

  `,
  standalone: false,
})
export class CounterComponent {

  public counter: number = 0;

  crecerEn1(value: number) {
     this.counter += value;
  }

  reset() {
    this.counter = 0;
  }


}
