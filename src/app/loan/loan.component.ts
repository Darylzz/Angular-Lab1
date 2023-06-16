import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  providers: [LoanService]
})
export class LoanComponent implements OnInit {

  expectedTotal!: number
  constructor(private loanService: LoanService) {
    this.expectedTotal = this.loanService.expectedTotal
  }

  ngOnInit() {
    this.loanService.expectedTotal$.subscribe(total => {
      this.expectedTotal = total
    })
  }
}
