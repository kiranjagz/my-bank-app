import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuService } from './services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-bank-app';
  context = 'money';

  constructor(private menuService: MenuService){

  }
  ngOnInit(): void {
    this.menuService.menuUpdated.subscribe(() => {
      this.context = this.menuService.getMenu();
    })
  }
}
