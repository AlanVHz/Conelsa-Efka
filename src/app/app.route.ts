import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductosComponent } from './pages/productos/productos.component';

const APP_ROUTING: Routes = [
    { path:'productos', component: ProductosComponent },
    { path:'home', component: LandingComponent },
    { path:'', pathMatch:"full", redirectTo:"home" },
    { path:'**', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot( APP_ROUTING );