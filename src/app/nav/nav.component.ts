import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private isUserLoggedIn = false;
  private username: string;
  constructor(private router: Router, private auth: AuthService) {
    auth.userSignIn.subscribe((user: User) => {
      this.username = user.name;
      this.isUserLoggedIn = true;
    });
    auth.userLogout.subscribe(() => {
      this.username = '';
      this.isUserLoggedIn = false;
    });
    auth.userSignUp.subscribe((user: User) => {
      this.username = user.name;
      this.isUserLoggedIn = true;
    });
  }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  logOut(e) {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

  signIn(e) {
    e.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(e) {
    e.preventDefault();
    this.router.navigate(['signup']);
  }
}
