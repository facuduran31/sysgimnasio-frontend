import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  constructor(private usuariosService:UsuariosService) { }

  usuarios:Usuario[] = [];

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe((usuarios:Usuario[])=>{
      this.usuarios = usuarios;
    },(error)=>{
      console.error('Error fetching usuarios:', error);
    });
  }
}
