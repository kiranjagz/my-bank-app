import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redbucks',
  templateUrl: './redbucks.component.html',
  styleUrls: ['./redbucks.component.scss']
})
export class RedbucksComponent implements OnInit {
  @Input() account;
  constructor() { }

  ngOnInit(): void {
  }

}
