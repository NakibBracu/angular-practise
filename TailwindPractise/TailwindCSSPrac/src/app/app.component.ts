import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TailwindCSSPrac';
  amount: number;
  quantity: number;
  totalPrice: number ;
  CalculateTotal(event: Event){
    this.totalPrice = this.amount*this.quantity
  }
  CalculateTotal2(a:number,b:number){
    this.totalPrice = a * b;
  }

}
