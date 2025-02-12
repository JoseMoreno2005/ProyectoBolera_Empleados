import { Component} from '@angular/core';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Empleados } from '../../interfaces/Empleados';
import { GestionarhorarioService } from '../../servicios/gestionarhorario.service';

@Component({
  selector: 'app-horario',
  imports: [MatTableModule, MatPaginatorModule,],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})

export class HorarioComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Empleados>;

    listaEmpleados: Empleados[] = [];
    listaFechas = [{"fecha":"","numeroDia":0,"nombreDia":""}];
    constructor(private servicioEmpleados:GestionarhorarioService ) {
    }

    ngOnInit() {
      this.getEmpleados();
      this.generarFechasSemana();
    }
    getEmpleados() {
      this.servicioEmpleados.getEmpleados().subscribe(empleados => this.listaEmpleados = empleados);
    }
    generarFechasSemana() {
      let hoy = new Date();
      let nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      
      for (let i = 0; i < 7; i++) {
          let nuevaFecha = new Date();
          nuevaFecha.setDate(hoy.getDate() + i);
          
          let numeroDia = nuevaFecha.getDay();
          let nombreDia = nombresDias[numeroDia];
          
          this.listaFechas.push({
              fecha: nuevaFecha.toISOString().split('T')[0],
              numeroDia: numeroDia,
              nombreDia: nombreDia
          });
      }
      
      return this.listaFechas;
  }

  }
  
  