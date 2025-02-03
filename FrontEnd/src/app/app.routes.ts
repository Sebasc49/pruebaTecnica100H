import { Routes } from '@angular/router';
import { LoginComponent } from './Paginas/login/login.component';
import { RegisterComponent } from './Paginas/registro/registro.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent, title: "Login"},
    {path: "", component: RegisterComponent, title: "Register"},
];            