import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Sesion } from '../Interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  constructor(private _snackBar: MatSnackBar) { }

  mostrarAlerta(message: string, tipo: string){
    this._snackBar.open(message, tipo, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }

  guardarSesionUsuario(usuarioSesion: Sesion){
    localStorage.setItem("usuario", JSON.stringify(usuarioSesion));
  }

  obtenerSesionUsuario(){
    const dataCadena = localStorage.getItem("usuario");
    const usuario = JSON.parse(dataCadena!);
    return usuario;
  }

  eliminarSesionUsuario(){
    localStorage.removeItem("usuario");
  }

}
