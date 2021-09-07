import { Component } from '@angular/core';

@Component({
  selector: 'hello-ng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allItems = [
    { descrition: 'Item 1', isDone: true },
    { descrition: 'Item 2', isDone: false },
    { descrition: 'Item 3', isDone: true },
    { descrition: 'Item 4', isDone: false },
  ];

  title = 'to-do-list';


  addItem(descrition: string) {

    this.allItems.unshift( { descrition: descrition, isDone: false } );
  }
}
