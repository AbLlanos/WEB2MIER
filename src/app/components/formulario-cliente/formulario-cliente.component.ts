import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ClientService } from '../../servicio/client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [NavBarComponent,FormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {

  constructor(private servicioCliente: ClientService){}

  nombre: string="";
  direccion:string="";
  email:string="";

  agregarCliente(formulario:any)
  {
    this.servicioCliente.guardarCliente(formulario.value).subscribe(()=>
    
      window.location.reload()
    )
  }

}
