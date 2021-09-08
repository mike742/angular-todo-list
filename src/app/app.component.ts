import { Component } from '@angular/core';

@Component({
  selector: 'hello-ng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
    this.allItems.unshift({ descrition: descrition, isDone: false });
  }

  deleteItem(item: any) {
    console.log(item);
    // const index = this.allItems.indexOf(item);
    const index = this.allItems.findIndex((i) => i === item);
    console.log(index);
    this.allItems.splice(index, 1);
  }

  checkValue() {}
  changeEvent(e: any) {
    console.table(this.allItems);
  }
}
