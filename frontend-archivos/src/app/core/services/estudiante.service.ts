import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  _id?: string;
  nombres: string;
  apellidos: string;
  identificacion: string;
  curso: string;
}

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private apiUrl = 'http://localhost:3000/api/estudiantes';

  constructor(private http: HttpClient) {}

  registrar(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, estudiante);
  }

  consultar(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }
}
