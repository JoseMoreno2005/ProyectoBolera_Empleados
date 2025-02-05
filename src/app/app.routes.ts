import { Routes } from '@angular/router';
import { HorarioComponent } from './horario/horario.component';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';
import { FichajesComponent } from './componentes/fichajes/fichajes.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

export const routes: Routes = [
    {path:'horario',component:HorarioComponent},
    {path:'peticiones',component:PeticionesComponent},
    {path:'fichajes',component:FichajesComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'',component:PrincipalComponent}
];
