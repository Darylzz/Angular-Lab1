import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  borrowName: string = '';
  principal: number | null = null;
  interestRate: number | null = null;
  interestRateType: string = '';
  loanDuration: number | null = null;
  totalInterest:number | null = null

  constructor(private loanService: LoanService) {
    this.borrowName = this.loanService.borrowName
    this.principal = this.loanService.principal
    this.interestRate = this.loanService.interestRate
    this.interestRateType = this.loanService.loanInterestRateType
    this.loanDuration = this.loanService.loanDuration
    this.interestRate = this.loanService.totalInterest
  }
  
  ngOnInit() {}

  onSubmitForm() {
    if (
      this.borrowName === '' ||
      this.principal === null ||
      this.interestRate === null ||
      this.interestRateType === '' ||
      this.loanDuration === null
    ) {
      alert('Input cannot be empty');
    } else if (!/^([5-9]|1\d|2[0-5])(\.\d)?$/.test(this.interestRate.toString())) {
      alert('Invalid interest rate. Please enter a percentage between 5 and 25.');
    } else if (this.loanDuration > 10) {
      alert('Maximum loan duration at 10')
    } else {
      this.loanService.borrowName = this.borrowName;
      this.loanService.principal = this.principal;
      this.loanService.interestRate = this.interestRate;
      this.loanService.loanInterestRateType = this.interestRateType;
      this.loanService.loanDuration = this.loanDuration;

      this.loanService.addToLoan();
      this.resetForm();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if(event.key === '.' || event.key === ',') {
      event.preventDefault()
    }
  }

  cancelForm() {
    this.resetForm();
  }

  private resetForm() {
    this.borrowName = '';
    this.principal = null;
    this.interestRate = null;
    this.interestRateType = '';
    this.loanDuration = null;
  }
}
