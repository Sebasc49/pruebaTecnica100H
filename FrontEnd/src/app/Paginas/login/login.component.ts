import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { Credenciales } from '../../interface/credenciales';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formularioLogin = new FormGroup({
    "email": new FormControl(""),
    "password": new FormControl("")
  });

 
  handleSubmint() {
    const emailLogin = this.formularioLogin.value.email;
    const passwordLogin = this.formularioLogin.value.password;


    let CredencialesIngreso: Credenciales | null = null;


    if (typeof emailLogin === "string" && typeof passwordLogin === "string") {

      CredencialesIngreso = {

        emailLogin,
        passwordLogin
      }
    }

    if(CredencialesIngreso){
        (res: any) => {
          console.log(res)
          if(res){
            localStorage.setItem('token', res.tokenGenerado)
          }
        (err: any) =>{
          console.log(err.error.mensaje);
          this.formularioLogin.reset();
        }
      }
    }
  }
}