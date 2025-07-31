import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormularioClienteComponent } from './components/formulario-cliente/formulario-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';

export const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "clientes", component: ClienteComponent },
    { path: "formularioClientes", component: FormularioClienteComponent },

    { path: "clientes/:id", component: ActualizarClienteComponent },
];
