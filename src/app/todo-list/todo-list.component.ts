import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todo: string = ''
  boxes: string[] = []
  selectedBoxIndex: number = -1

  addTodoBox() {
    if(this.todo === '') {
      alert('Input cannot empty string')
    } else if(this.boxes.length >= 10 ) {
      alert('List have max at 10')
    } else {
      this.boxes.push(this.todo)
    }
    this.todo = ''
  }

  clickDeleteTodo(index: number) {
    this.boxes.splice(index, 1)
  }
  handleErrorMaxLength() {
    if(this.todo.length >= 100) {
      alert('Input Max length at 100')
    }
  }

  selectBox(index: number) {
    if (this.selectedBoxIndex === index) {
      this.selectedBoxIndex = -1; 
    } else {
      this.selectedBoxIndex = index;
    }
  }
}
