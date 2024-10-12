import { Routes } from '@angular/router';
import { DataProcessHomeComponent } from '../components/data-process-home/data-process-home.component';
import { AuthHomeComponent } from '../components/auth-home/auth-home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DataProcessHomeComponent
    },
    {
        path: 'auth',
        component: AuthHomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    
];
