import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Menu } from 'src/app/Interfaces/menu';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  listaMenus: Menu[] = [];
  correoUsuario: string = "";
  rolUsuario: string = "";


  constructor(
    private router: Router,
    private _menuService: MenuService,
    private _utilidadServic: UtilidadService
  ) { }

  ngOnInit(): void {

    const usuario = this._utilidadServic.obtenerSesionUsuario();

    if(usuario != null)
    {
      this.correoUsuario = usuario.correo;
      this.rolUsuario = usuario.rolDescripcion;
      console.log(usuario.idUsuario);
      this._menuService.lista(usuario.idUsuario).subscribe({
        next: (data) =>{
          if(data.status) this.listaMenus = data.value;
        },
        error: (e)=>{}
      })


    }

  }

  cerrarSesion(){
    this._utilidadServic.eliminarSesionUsuario();
    this.router.navigate(["/login"]);
  }

}
