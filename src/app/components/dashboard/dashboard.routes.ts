import { Routes } from '@angular/router';

import { CategoriaComponent } from './categoria/categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TareaComponent } from './tarea/tarea.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { usuario_routes } from './usuario/usuario.routes';

export const dashboard_routes:Routes = [
  { path: 'categoria', component: CategoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tarea', component: TareaComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: usuario_routes
  },
  { path: '**', pathMatch: 'full', redirectTo: 'contacto'}
]
