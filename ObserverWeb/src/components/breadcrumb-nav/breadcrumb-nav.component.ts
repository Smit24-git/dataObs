import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class BreadcrumbNavComponent implements OnInit, OnChanges{
  
  @Input({required: true}) currentLocation: string[] = [];
  @Input({required: true}) home!: MenuItem;

  items:MenuItem[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['currentLocation'])
      this.setItemsByCurrentLocation();
  }

  setItemsByCurrentLocation() {
    this.items = [];
    let routerPath = ''; 
    this.currentLocation.forEach(location=>{
      routerPath += location;
      this.items.push({
        routerLink: routerPath,
        label: location,
      });
      routerPath += '/'
    });
  }
}
