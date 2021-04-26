import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  @Input() account;
  constructor() { }

  ngOnInit(): void {
  }

}
