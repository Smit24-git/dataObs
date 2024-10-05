import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-process-steps',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './data-process-steps.component.html',
  styleUrl: './data-process-steps.component.scss'
})
export class DataProcessStepsComponent implements OnInit {
  steps:MenuItem[] = [];

  ngOnInit(): void {
    this.setSteps();
  }

  setSteps() {
    this.steps = [
      {
        label: '1. Data Source',
        disabled: false
      }, {
        label: '2. Context',
        disabled: true
      }, {
        label: '3. Cleaning',
        disabled: true
      }, {
        label: '4. Analysis',
        disabled: true
      }, {
        label: '5. Model Selection',
        disabled: true
      }, {
        label: '6. Processing',
        disabled: true
      }, {
        label: '7. Results',
        disabled: true
      }, {
        label: '8. Insights',
        disabled: true
      }, {
        label: '9. Exports',
        disabled: true
      }, {
        label: '00. AutoML <EXT>',
        disabled: true
      },
    ]
  }

}
