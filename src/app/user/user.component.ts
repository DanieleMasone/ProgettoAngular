import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') userSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.userSelected.emit(this.user);
  }
}
