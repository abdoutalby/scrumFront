import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router
  ) {}
  ngOnInit(): void {}

  submit() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    const user = this.loginForm.value;

    //   this.authService.login(user).subscribe({
    //   next:(res: any)=>{ 
    //     localStorage.setItem('token' , res.access_token);
    //     this.router.navigate(['room/crud'])
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // });

    this.router.navigate(['room/crud'])
  }
}
