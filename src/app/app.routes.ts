import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Dashboard } from './componets/dashboard/dashboard';
import { LoginComponent } from './componets/login/login';
import { Register } from './componets/register/register';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'register', component: Register
    },

    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    }

];