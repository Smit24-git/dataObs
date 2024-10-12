import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-auth-options',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './auth-options.component.html',
  styleUrl: './auth-options.component.scss'
})
export class AuthOptionsComponent implements OnInit {
  
  options:MenuItem[] = [];

  @Output() onOptionActivated = new EventEmitter<string>()

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions(){
    this.options = [
      {
        label: 'Login',
        routerLink: 'login',
        command: ()=>{ this.activateLogin() }
      },
      {
        label: 'Register',
        routerLink: 'register',
        command: () => { this.activateRegister(); }
      }
    ]
  }

  private activateRegister() {
    this.onOptionActivated.emit('register');
  }

  private activateLogin() {
    this.onOptionActivated.emit('login');
  }
}
