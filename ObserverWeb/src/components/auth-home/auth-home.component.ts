import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbNavComponent } from "../breadcrumb-nav/breadcrumb-nav.component";
import { AuthOptionsComponent } from "../auth-options/auth-options.component";
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-auth-home',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbNavComponent, 
    AuthOptionsComponent],
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss'
})
export class AuthHomeComponent implements OnInit {

  currentLocation:string[] = [];
  homeLocation:MenuItem = { 
    icon: 'pi pi-home', 
    routerLink: '/auth/login',
    command: () => {this.currentLocation = ['login']}
  };

  private router = inject(Router);

  ngOnInit(): void {
    this.navigateToLogin();
  }

  navigateToLogin() {
    const login = 'login';
    this.router.navigate(['auth',login]);
    this.breadcrumbTo(login);
  }

  breadcrumbTo(value:string){
    this.currentLocation = [
      value
    ];
  }
}
