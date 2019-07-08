import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import * as faker from 'faker';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  todos: ItemsList[] = [];
  completed: Item[] = [];

  constructor() {
    faker.locale = 'es';
    //
    // for (let i = 0; i < 5; i++) {
    //   this.todos.push(new Item());
    //   this.completed.push(new Item());
    // }

    for (let j = 0; j < 4; j++) {
      const list = new ItemsList(faker.company.companyName());
      list.index = j;
      for (let i = 0; i < 5; i++) {
        list.items.push(new Item());
      }
      this.todos.push(list);
    }
  }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addList(idx) {
    const list = new ItemsList(faker.company.companyName());
    list.index = idx + 1;
    for (let i = 0; i < 5; i++) {
      list.items.push(new Item());
    }
    this.todos.push(list);

    return false;
  }
}

class Item {
  title: string;
  description: string;

  constructor() {
    this.title = faker.name.findName();
    this.description = faker.lorem.sentence();
  }
}

class ItemsList {
  items: Item[] = [];
  index: number;
  title: string;

  constructor(_title: string) {
    this.title = _title;
  }
}
