import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/views/services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  use:any;
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, 
    private authService: AuthService,
    private route : Router) {
    super();
  }

  ngOnInit(): void {

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  logout(){

    if(this.authService.logout() || this.authService.logout_s()){
 
     localStorage.removeItem('token');
     localStorage.clear();
     sessionStorage.removeItem('user');
     sessionStorage.clear();
     this.route.navigate(["/login"]);
    }
 
 }

}
