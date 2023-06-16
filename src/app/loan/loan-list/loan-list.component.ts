import { Component } from '@angular/core';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent {
  boxes: any[] = [];

  constructor(private loanService: LoanService) {
    this.boxes = this.loanService.boxes;
  }

  closeLoan(index: number) {
    this.boxes.splice(index, 1)
    this.loanService.updateTotal()
    // console.log(this.loanService.expectedTotal)
  }

}
