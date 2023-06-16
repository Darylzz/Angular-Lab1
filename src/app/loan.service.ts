import {Injectable} from '@angular/core'
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoanService {
    borrowName!: string;
    principal!: any;
    interestRate!: any;
    loanInterestRateType: string = '';
    loanDuration!: any;
    totalInterest!: any
    
    expectedTotal!: number
    expectedTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    
    boxes: any[] = [];

  
    addToLoan() {
        this.boxes.push({
          borrowName: this.borrowName,
          principal: this.principal,
          interestRate: this.interestRate,
          interestRateType: this.loanInterestRateType,
          loanDuration: this.loanDuration,
          totalInterest: this.sumTotalLoan(),
        });
        this.updateTotal()
    }

    sumTotalLoan() {
      const sumInterestRate = this.interestRate/100
      const sumPrinciple = this.principal * sumInterestRate
      const sumDurationPerMonth = this.loanDuration * 12
      if(this.loanInterestRateType === 'annually') {
         return sumPrinciple * this.loanDuration
      } else if (this.loanInterestRateType === 'monthly') {
         return sumPrinciple * sumDurationPerMonth
      }
      return 0
    }


    updateTotal() {
      const newTotal = this.boxes.reduce((sum, box) => sum + box.totalInterest, 0)
      this.expectedTotal$.next(newTotal)
    }
  }
  