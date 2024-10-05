import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  title="Data Observer"
}
