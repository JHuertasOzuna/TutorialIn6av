import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
  formularioLogin:FormGroup;

  constructor(
    private usuarioService:UsuarioService
  ) {}

  ngOnInit() {
    let validaciones = [
      Validators.required, Validators.minLength(2)
    ]

    this.formularioLogin = new FormGroup({
      'nick': new FormControl('', validaciones),
      'contrasena': new FormControl('', validaciones)
    });
  }

  public iniciarSesion() {
    console.log(this.formularioLogin.value);
    this.usuarioService.autenticar(this.formularioLogin.value);
  }

}
