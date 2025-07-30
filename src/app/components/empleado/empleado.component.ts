import { Component } from '@angular/core';
import { EmpleadosService } from '../../servicio/empleados.service';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  constructor(private servicioEmpleado: EmpleadosService) { }

  empleados: Empleado[] = [];

  ngOnInit() {

    this.servicioEmpleado.getEmpleado().subscribe(data => {
      this.empleados = data.items;
    });

  }



}
