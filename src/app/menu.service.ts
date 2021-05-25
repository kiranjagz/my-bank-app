import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MenuService{
  private menuItem: string = "";
  public menuUpdated = new Subject<void>();

  constructor(){

  }

  setMenu(menuItem: string) : void{
    this.menuItem = menuItem;
    this.menuUpdated.next();
  }

  getMenu() : string {
    return this.menuItem;
  }
}
