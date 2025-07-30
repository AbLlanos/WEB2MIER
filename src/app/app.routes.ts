import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';

export const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "clientes", component: ClienteComponent },
    { path: "formularioClientes", component: FormularioClienteComponent },

];
