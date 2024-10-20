import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/Authentication/auth.service';
import { LocalStorageService } from '../../shared/services/LocalStorage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8) ]]
    });
  }

  authenticateUser() {
    if(this.loginForm.invalid)
      throw Error("Invalid Form Input");

    const formData = this.loginForm.getRawValue();

    this.authService.authenticate({
      username: formData.email,
      password: formData.password
    }).subscribe((res)=>{
      this.localStorageService.saveToken(res.token);
      this.router.navigate(['home']);
    });

  }
}
