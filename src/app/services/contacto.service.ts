import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsuarioService } from './usuario.service';
import 'rxjs/Rx';
@Injectable()
export class ContactoService {
  url:string = "http://localhost:3000";

  constructor(
    private http:Http,
    private usuarioService:UsuarioService
  ) {  }

  getContactos() {
    let uri = `${this.url}/api/v1/contacto/`;

    let headers = new Headers({
      'Authorization': this.usuarioService.getToken()
    });

    return this.http.get(uri, {headers})
    .map(res => {
      return res.json();
    })
  }

  getContacto(idContacto:any) {
    let uri = `${this.url}/api/v1/contacto/${idContacto}`;

    let headers = new Headers({
      'Authorization': this.usuarioService.getToken()
    });

    return this.http.get(uri, {headers})
    .map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  nuevoContacto(contacto:any) {
    let uri = `${this.url}/api/v1/contacto`;

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.usuarioService.getToken()
    });

    let data = JSON.stringify(contacto);

    return this.http.post(uri, data, {headers})
    .map(res => {
      return res.json();
    });
  }

  editarContacto(contacto:any, idContacto:any) {
    let uri = `${this.url}/api/v1/contacto/${idContacto}`;

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.usuarioService.getToken()
    });

    let data = JSON.stringify(contacto);

    return this.http.put(uri, data, {headers})
    .map(res => {
      return res.json();
    });
  }

  eliminarContacto(idContacto:number) {
    let uri = `${this.url}/api/v1/contacto/${idContacto}`;

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.usuarioService.getToken()
    });

    return this.http.delete(uri, {headers})
    .map(res => {
      return res.json();
    });
  }
}
