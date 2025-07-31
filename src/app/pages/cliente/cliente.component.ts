import { Component } from '@angular/core';
import { EmpleadoComponent } from "../../components/empleado/empleado.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ListaClientesComponent } from "../../components/lista-clientes/lista-clientes.component";

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [EmpleadoComponent, NavBarComponent, ListaClientesComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

}
