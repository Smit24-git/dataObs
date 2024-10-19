import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [
    PanelMenuModule,
    BreadcrumbModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [
  ],
})
export class SharedModule { }
