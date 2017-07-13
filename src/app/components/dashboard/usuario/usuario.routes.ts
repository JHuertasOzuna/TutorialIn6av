import { Routes } from '@angular/router';

import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioComponent } from './usuario.component';

export const usuario_routes:Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]
