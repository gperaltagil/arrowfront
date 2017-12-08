import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full' },
    { path: 'login', component: InicioSesionComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: '**', component: PaginaNoEncontradaComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);