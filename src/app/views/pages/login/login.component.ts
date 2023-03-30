import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from 'src/app/views/services/auth.service'
import { Utilisateur } from '../../models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup!: FormGroup;
  response: any;
  erreur = "";


  constructor(private builder: FormBuilder,
              private authService: AuthService,
              private route: Router,
              private toastr: ToastrService) { 

  }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      login: new FormControl(null,[Validators.required]),
      mdp: new FormControl(null,[Validators.required])
    });
  }

  onLogin(){

    const user = new Utilisateur;
    user.login = this.formGroup.controls['login'].value;
    user.mdp = this.formGroup.controls['mdp'].value;
    console.log(user);
    
     this.authService.login(user).subscribe(result => {
     console.log(result.status);   
      if(result.status == true)
      { 
          this.response = result;
          console.log(this.response);
          console.log(this.formGroup.valid);
          localStorage.setItem('token', this.response.access_token);
          sessionStorage.setItem('user', JSON.stringify(this.response.user));
          this.toastr.success('Connexion Reussi', 'Login');
          this.route.navigate(['../dashboard']);
          
        } else  {
          
          this.toastr.error("Login ou password incorrect ou Contactez l'Administrateur", "Login");
        } 

      })
    }

      
    }
  