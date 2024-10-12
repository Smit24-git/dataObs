import { Component, inject, OnInit } from '@angular/core';
import { DataProcessStepsComponent } from "../data-process-steps/data-process-steps.component";
import { BreadcrumbNavComponent } from "../breadcrumb-nav/breadcrumb-nav.component";
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-process-home',
  standalone: true,
  imports: [DataProcessStepsComponent, BreadcrumbNavComponent],
  templateUrl: './data-process-home.component.html',
  styleUrl: './data-process-home.component.scss'
})
export class DataProcessHomeComponent implements OnInit {
  
  login: boolean = false;
  homeLocation:MenuItem = { icon: 'pi pi-home', routerLink: '/home'};
  currentLocation:string[] = ['data-process']

  private router = inject(Router);

  ngOnInit(): void {
    this.checkLoginAndNavigate();
  }

  checkLoginAndNavigate() {
    this.login = false;

    // check login credentials.

    // navigate if not logged in

    if(!this.login){
      this.router.navigateByUrl('auth');
    }
  }
}
