import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm : FormGroup;

   constructor(private fb: FormBuilder) {
    // ✅ Initialize it using FormBuilder
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

 get email() {
    return this.signinForm.get('email')!;
  }

  get password() {
    return this.signinForm.get('password')!;
  }

  onSubmit(){
    if(this.signinForm.valid){
      console.log(this.signinForm.value)
    }
  }
}
