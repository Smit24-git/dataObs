import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  exports: [
    PanelMenuModule,
    BreadcrumbModule
  ],
  providers: [
  ],
})
export class SharedModule { }
