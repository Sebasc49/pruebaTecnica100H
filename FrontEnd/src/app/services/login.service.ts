import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credenciales } from '../interface/credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);

  
  private URL_LOGIN = "http://localhost:9000/iniciarSesion/";

  login(credencialesLogin: Credenciales){
    return this._httpClient.post(this.URL_LOGIN, credencialesLogin);
  }

  obtenerToken(){
    return localStorage.getItem("token");
  }

  
  estaLogueado(){
   
    return this.obtenerToken()? true : false
  }



  cierreSesion(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}