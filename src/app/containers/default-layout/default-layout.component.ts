import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';
import { admin , users , respo } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  use: any;

  menu: INavData[]=[];

  public admin = admin;
  public respo = respo;
  public users = users;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}

  ngOnInit(): void {

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

    
    if(this.use?.profile?.nom === 'admin')
    {
    // this.menuItems = ADMIN;
    this.menu = admin;
    }
    else if(this.use?.profile?.nom ==='agent')
    {
    //this.menuItems = Agents;
    this.menu = users;
    }
    else if(this.use?.profile?.nom ==='respo')
    {
    //this.menuItems = Responsable;
    this.menu = respo;
    }
   

  }
}
