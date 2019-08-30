import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp(form: NgForm) {
    if (!form.valid) {
      return false;
    }

    if (this.auth.signUp(form.value.name, form.value.email, form.value.password)) {
      this.router.navigate(['']);
    }
  }
}
