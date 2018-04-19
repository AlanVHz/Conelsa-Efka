import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

const APP_ROUTING:Routes = [
    { path:'home', component: HomeComponent },
    { path:'productos', component: ProductosComponent },
    { path:'', pathMatch:'full', redirectTo:'home' },
    { path:'**', redirectTo: 'home'}
];

export const APP_ROUTES = RouterModule.forRoot( APP_ROUTING );