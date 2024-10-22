import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-panel',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './import-panel.component.html',
  styleUrl: './import-panel.component.scss'
})
export class ImportPanelComponent implements OnInit {
  
  private router = inject(Router);
  
  // starting point of the module data execution
  ngOnInit(): void {

  }

  /**
   * navigates to the text import option.
   */
  gotoTextImport() {
    this.router.navigate(['import', 'text']);
  }
}
