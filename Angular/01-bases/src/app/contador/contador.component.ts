import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
                <h1>{{ title}}</h1>
                <h3>la base es <strong>{{base}}</strong></h3>
                <button (click)="acumular(base)">+{{base}}</button>
                <span> {{number}} </span>
                <button (click)="acumular(-base)">-{{base}}</button>
                `
})
export class ContadorComponent {
    title: string = 'Contador App';

    number: number = 0;
  
    base: number = 5;
  
  /*   incrase() {
      this.number += 1
    }
    
    decrase() {
      this.number -= 1
    } */
  
    acumular(value: number) {
      this.number += value;
    }
}