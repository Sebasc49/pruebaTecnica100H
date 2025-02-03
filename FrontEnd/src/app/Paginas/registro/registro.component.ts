import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Usuarios } from '../../interface/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegisterComponent {
  _usuariosService = inject(UsuariosService);
  _Router = inject(Router);

  formularioRegistro = new FormGroup({

    fullName: new FormControl(""), 
    email: new FormControl(""), 
    password: new FormControl("")
  });

  handleSubmint(){

    const fullName = this.formularioRegistro.value.fullName;
    const email = this.formularioRegistro.value.email;
    const password = this.formularioRegistro.value.password;


    let CredencialesRegistro: Usuarios | null = null;


    if (typeof fullName === "string" && typeof email === "string" &&  typeof password === "string") {

      CredencialesRegistro = {

        fullName,
        email,
        password
      }
    }

    if (CredencialesRegistro) {
      this._usuariosService.postUsuarios(CredencialesRegistro).subscribe({
        next: (res: any) => {
          console.log(res);

          this._Router.navigate(["/login"]);
        },

        error: (err) => {
          console.log(err.error.mensaje);
          this.formularioRegistro.reset();
        }
      })
    }
  }
}