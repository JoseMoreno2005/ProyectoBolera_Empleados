import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bolera-empleados';
}
