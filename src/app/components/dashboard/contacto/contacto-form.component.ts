import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: 'contacto-form.component.html',
})
export class ContactoFormComponent implements OnInit {
  url:string;
  notificacion:any = {
    estado:false,
    mensaje: ""
  }
  contacto:any = {
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    idCategoria: 0,
    idContacto: 0
  }
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private contactoService: ContactoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.url = params["idContacto"];

      if(this.url !== "nuevo") {
        this.contactoService.getContacto(this.url)
        .subscribe(c => this.contacto = c);
      } else {
        this.resetFormulario();
      }
    });
  }

  ngOnInit() {}

  guardarCambios() {
    if(this.url === "nuevo") {
      this.contactoService.nuevoContacto(this.contacto)
      .subscribe(res => {
        console.log(res);
        this.setNotificacion(res);
        this.resetFormulario();
      });
    } else {
      console.log(this.contacto);
      this.contactoService.editarContacto(this.contacto, this.url)
      .subscribe(res => {
        console.log(res);
        this.setNotificacion(res);
      });
    }
  }

  private setNotificacion(notificacion:any) {
    this.notificacion.estado = notificacion.estado;
    this.notificacion.mensaje = notificacion.mensaje;

    setTimeout(() => {
      this.resetNotificacion();
    }, 5000);
  }

  private resetFormulario() {
    this.contacto.nombre = "";
    this.contacto.apellido = "";
    this.contacto.direccion = "";
    this.contacto.telefono = "";
    this.contacto.idCategoria = 0;
    this.contacto.idContacto = 0;
  }

  private resetNotificacion() {
    this.notificacion.mensaje = "";
    this.notificacion.estado = false;
  }
}
