import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeroe: string = '';
  
  deleteHeroe() {
    this.deletedHeroe = this.heroes.shift() || '';
  }
}
