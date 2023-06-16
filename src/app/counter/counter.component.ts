import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  boxes = [{ count: 0}]

  total: number = 0

  
  addCounter() {
    this.boxes.push({ count: 0 })
    this.updateTotal()
  }
  
  deleteCounter(index: number) {
    this.boxes.splice(index, 1)
    this.updateTotal()
  }
  
  incrementCount(index: number) {
    this.boxes[index].count += 1
    // console.log(this.boxes[index].count)
    this.updateTotal()
  }
  
  decrementCount(index: number) {
    if(this.boxes[index].count <= 0) {
      this.boxes[index].count
    } else {
      this.boxes[index].count -= 1
    }
    // console.log(this.boxes[index].count)
    this.updateTotal()
  }
  updateTotal() {
    this.total = this.boxes.reduce((sum, box) => sum + box.count, 0)
  }
}
