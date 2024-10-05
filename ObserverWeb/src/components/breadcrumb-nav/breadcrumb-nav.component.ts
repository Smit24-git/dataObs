import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-nav',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './breadcrumb-nav.component.html',
  styleUrl: './breadcrumb-nav.component.scss'
})
export class BreadcrumbNavComponent implements OnInit{

  home!:MenuItem;
  items:MenuItem[] = [];

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/home'};
  }
}
