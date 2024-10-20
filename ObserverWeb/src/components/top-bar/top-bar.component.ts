import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';
import { Router } from '@angular/router';

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
export class TopBarComponent implements OnInit {

  title = "Data Observer";
  login = false;

  private localStorage = inject(LocalStorageService);
  private router = inject(Router);


  ngOnInit(): void {
    this.checkAndSetLoginProperty();
  }

  checkAndSetLoginProperty() {
    if(this.localStorage.getToken())
      this.login = true;
    else
      this.login = false;

  }

  logout(){
    this.localStorage.saveToken('');
    this.checkAndSetLoginProperty();
    this.router.navigate(['auth']);
  }
}
