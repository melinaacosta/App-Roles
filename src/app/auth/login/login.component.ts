import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('role', 'admin');
        this.router.navigate(['/dashboard']);
      } else if (username === 'user' && password === 'user123') {
        localStorage.setItem('role', 'user');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }
}
