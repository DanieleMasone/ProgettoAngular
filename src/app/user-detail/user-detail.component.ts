import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private _user: User;
  @Input() set user(user: User) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }

  get user() {
    return this._user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      this.user = params.get('id') !== null ? this.userService.getUser(+params.get('id')) : new User();  //+ -> cast to number
    });
  }

  saveUser() {
    (this.user.id > 0) ? this.userService.updateUser(this.user) : this.userService.createUser(this.user);
    this.router.navigate(['users']);
  }

  resetForm() {
    (this.user.id === 0) ? this.user = new User() : this.user = this.userCopy;
  }

  backToUser() {
    this.router.navigate(['users']);
  }
}
