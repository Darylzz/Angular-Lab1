import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoanComponent } from './loan.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanService } from '../loan.service';

@NgModule({
  declarations: [
    LoanComponent,
    LoanFormComponent,
    LoanListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [LoanService]
})
export class LoanModule { }
