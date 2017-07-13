import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';
import { AuthGuardService } from './services/auth-guard.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/dashboard/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/dashboard/usuario/usuario-editar.component';
import { ContactoComponent } from './components/dashboard/contacto/contacto.component';
import { TareaComponent } from './components/dashboard/tarea/tarea.component';
import { CategoriaComponent } from './components/dashboard/categoria/categoria.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UsuarioComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent,
    ContactoComponent,
    TareaComponent,
    CategoriaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [
    UsuarioService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
