import { Component } from '@angular/core';
import { DataProcessStepsComponent } from "../data-process-steps/data-process-steps.component";
import { BreadcrumbNavComponent } from "../breadcrumb-nav/breadcrumb-nav.component";

@Component({
  selector: 'app-data-process-home',
  standalone: true,
  imports: [DataProcessStepsComponent, BreadcrumbNavComponent],
  templateUrl: './data-process-home.component.html',
  styleUrl: './data-process-home.component.scss'
})
export class DataProcessHomeComponent {

}
