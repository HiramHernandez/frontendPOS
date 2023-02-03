import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private urlApi: string = `${environment.endpoint}`;

  constructor(private http: HttpClient) { }

  lista(idUsuario: number): Observable<ResponseApi>{
    http://localhost:5000/api/Menu/Lista/1?idUsuario=1
    return this.http.get<ResponseApi>(`${this.urlApi}/Menu/Lista/${idUsuario}?idUsuario=${idUsuario}`);
  }

}
