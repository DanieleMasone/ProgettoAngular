import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    title = 'Users';
    users: Array<User> = [];
    @Output() updateUser: EventEmitter<User> = new EventEmitter();
    constructor(private service: UserService) {}

    ngOnInit() {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User) {
        this.service.deleteUser(user);
    }

    onSelectUser(user: User) {
        const tmpUser = Object.assign({}, user);
        this.updateUser.emit(tmpUser);
    }
}
