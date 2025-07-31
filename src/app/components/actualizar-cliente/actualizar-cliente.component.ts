import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ClientService } from '../../servicio/client.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  standalone: true,
  imports: [NavBarComponent,FormsModule],
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {

  constructor(private servicioCliente: ClientService,
    private router: Router, private ruta: ActivatedRoute
  ) { }

  id: string = "";
  cliente = <any>{ nombre: "", direccion: "", email: "" }

  ngOnInit(): void {

    this.ruta.params.subscribe(params => {
      this.id = params["id"]
      this.servicioCliente.buscarClientebyId(this.id).subscribe(cliente => {
        this.cliente = cliente;
      })
    })




  }

  editar(formulario: any): void {
    const clienteActualizado = { ...formulario.value, id: this.id };

    this.servicioCliente.editarCliente(this.id, clienteActualizado).subscribe(() => {
      this.router.navigate(["/formularioClientes"]);
    });
  }

}
