import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.component.html',
})
export class ContactoComponent implements OnInit {
  contactos:any[] = [];

  constructor(
    private contactoService:ContactoService
  ) {  }

  ngOnInit() {
    this.inicializar();
  }

  private inicializar() {
    this.contactoService.getContactos().subscribe(data => {
      this.contactos = data;
    })
  }

  public borrarContacto(idContacto:number) {
    this.contactoService.eliminarContacto(idContacto)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    })
  }
}
