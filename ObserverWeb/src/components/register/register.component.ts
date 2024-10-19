import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  
  registerForm!:FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.setDefaultRegisterForm();
  }

  setDefaultRegisterForm() {
    this.registerForm = this.fb.group({
      name: [, Validators.required],
      email: [, [Validators.email, Validators.required]],
      password: [, [Validators.required, Validators.minLength(8)]],
      passwordRetype: [, [Validators.required, Validators.minLength(8)]]
    });
  }

  registerUser() {
    if(this.registerForm.invalid)
      throw new Error("Invalid Form Input");
  }

}
