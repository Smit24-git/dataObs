import { Routes } from '@angular/router';
import { DataProcessHomeComponent } from '../components/data-process-home/data-process-home.component';

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
    
];
