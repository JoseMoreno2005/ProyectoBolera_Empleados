import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule,MatGridListModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  constructor(private router: Router){

  }
  cargar(opcion: string){
    switch (opcion){
      case 'horario': this.router.navigate(['horario']);
      break;
      case 'peticiones': this.router.navigate(['peticiones']);
      break;
      case 'fichajes': this.router.navigate(['fichajes']);
      break;
      case 'perfil': this.router.navigate(['perfil']);
      break;
      default:
    }
  }
}
