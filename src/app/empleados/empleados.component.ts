import { Component } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-empleados',
  templateUrl: "./empleados.component.html",
  styleUrls: ["./empleados.component.css"],
})
export class EmpleadosComponent {
  
  numero_empleados = 10
}
