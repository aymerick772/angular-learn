import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {UserLdap} from "./models/user-ldap";
import {LDAP_USERS} from "./models/ldap-mock-data";

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService implements InMemoryDbService{

  constructor() { }

   createDb() {
    console.log('InMemoryUsersServices.createdDb');
    const users: UserLdap[] = LDAP_USERS;
    return {users};
  }

  getId(users: UserLdap[]) : number{
    console.log('InMemoryUsersServices.getID')
    // bon le user.publisherId n'est pas bon mais il n'y a pas de user.id dans UserLdap[]
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 4;
  }
}
