import { Injectable } from '@angular/core';
import {UserLdap} from "../models/user-ldap";
import {LDAP_USERS} from "../models/ldap-mock-data";
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: UserLdap[] = LDAP_USERS;
  private usersUrl = '';
  private httpOptions= new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.usersUrl = environment.usersApiUrl;
  }

  getUsers(): Observable<UserLdap[]>{
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  getUser(id: number): Observable<UserLdap>{
    return this.http.get<UserLdap>(this.usersUrl + '/' + id);
  }

  // getUser(login: string): Observable<UserLdap | undefined> {
  //   const user = this.users.find(user => user.login === login);
  //   if(user !== undefined){
  //     return of(user);
  //   }
  //   return throwError(() => new Error('utilisateur non trouvé'))
  // }
  addUser(user: UserLdap): Observable<UserLdap>{
    return this.http.post<UserLdap>(this.usersUrl, user, {
      headers: this.httpOptions
    });
      // this.users.push(user);
      // return of(user)
  }
  updateUser(userToUpdate: UserLdap): Observable<UserLdap>{
    // const user = this.users.find(u => u.login === userToUpdate.login);
    return this.http.put<UserLdap>(this.usersUrl + '/' + userToUpdate.id,
      userToUpdate, {headers: this.httpOptions});
    // if(user){
    //   user.nom = userToUpdate.nom;
    //   user.prenom = userToUpdate.prenom;
    //   user.nomComplet  = user.nom + user.prenom;
    //   user.motDePasse = userToUpdate.motDePasse;
    //
    //   return of(userToUpdate)
    // }
    // return throwError(()=> new Error('Utilisateur non trouvé'))
  }

  deleteUser(id: number): Observable<UserLdap>{
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id, {
      headers: this.httpOptions
    });
  }
}
