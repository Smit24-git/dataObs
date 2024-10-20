import { Component, inject, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';
import { Router } from '@angular/router';
import { DataProcessStepsComponent } from "../data-process-steps/data-process-steps.component";
import { BreadcrumbNavComponent } from "../breadcrumb-nav/breadcrumb-nav.component";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataProcessStepsComponent, BreadcrumbNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  homeLocation:MenuItem = { icon: 'pi pi-home', routerLink: '/home'};
  currentLocation:string[] = ['Home']

  
  private localStorage = inject(LocalStorageService);
  private router = inject(Router);

  ngOnInit(): void {
    this.redirectIfNotLoggedIn();
  }

  redirectIfNotLoggedIn() {
    const token = this.localStorage.getToken();
    if(!token){
      this.router.navigate(['auth']);
    }
  }


}
