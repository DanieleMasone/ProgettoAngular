import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class UserService {
    users: Array<User> = [
    {
        id: 1,
        name: 'Daniele',
        lastname: 'Masone',
        email: 'pippo.com',
        fiscalcode: 'IKSFHISUDH',
        province: 'Milano',
        phone: '8327647893',
        age: 27
    },
    {
        id: 2,
        name: 'Daniele2',
        lastname: 'Masone2',
        email: 'pippo.com',
        fiscalcode: 'IKSFHISUDH',
        province: 'Milano',
        phone: '8327647893',
        age: 27
    }];

    constructor() {}

    getUsers() {
        return this.users;
    }

    getUser(id: number) {
        return this.users.find( user => user.id === id);
    }

    deleteUser(user: User) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }

    updateUser(user: User) {
        const index = this.users.findIndex((v) => v.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    createUser(user: User) {
        user.id = this.users.length + 1;
        this.users.push(user);
    }
}
