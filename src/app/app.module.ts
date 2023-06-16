import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { LoanComponent } from './loan/loan.component';
// import { LoanFormComponent } from './loan/loan-form/loan-form.component';
// import { LoanListComponent } from './loan/loan-list/loan-list.component';
import { LoanService } from './loan.service';
import { HomeComponent } from './home/home.component';
import { LoanModule } from './loan/loan.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'loan', component: LoanComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoanModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoanService],
  bootstrap: [AppComponent],
})
export class AppModule {}
