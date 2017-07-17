import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

export const usuario_routes:Routes = [
  { path: '', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]
