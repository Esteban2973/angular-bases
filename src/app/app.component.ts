import { Component } from '@angular/core';
import { CounterComponent } from './counter/components/counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'Contador App';

}
