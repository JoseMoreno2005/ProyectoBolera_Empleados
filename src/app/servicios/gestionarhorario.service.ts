import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../interfaces/Empleados';

@Injectable({
  providedIn: 'root'
})
export class GestionarhorarioService {

  private RUTAHTTP='/';
  constructor(private http: HttpClient) { }
  getEmpleados():Observable<Empleados[]> {
    return this.http.get<Empleados[]>(this.RUTAHTTP+'empleados.json');
}

}
