import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: ` <h1>Hola desde mi nuevo componente con distinto names</h1>


<h3>Counter {{counter}} </h3>

<button (click)="increaseBy(1)" >+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetValue(10)">-reset-</button>
  `
})
export class CounterComponent {

  public title: string = 'hola como tasss aqui probando el title xd tonto';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetValue(value: number): void {
    this.counter = value;
  }
}
