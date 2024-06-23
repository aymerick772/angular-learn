import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

interface AuthentificationResponse{
  status : boolean;
  token: string;
  message : string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  redirectUrl = '/';

  constructor() { }

  static isLoggedId(){

    const token = AuthentificationService.getToken();
    console.log('token= ' + token);
  return !!token && !AuthentificationService.isTokenExpired(token);
  }
  static isTokenExpired(token: string){
    /*
    try{
    const decoded = jws_decode(token):
    return decoded.exp < Date.now() / 1000;
    } catch (err){
      return false;
    }
    * */
    return false;
  }
  static setToken(idToken: string){
    sessionStorage.setItem('id_token', idToken);
  }
  static getToken(){
    return sessionStorage.getItem('id_token');
  }
  static logout(){
    sessionStorage.removeItem('id_token');
  }

  loginWithRole(username : string, password : string, role: string): Observable<AuthentificationResponse>{
    /*
    const url = `${this.authentificationUrl}/login`;
    const httpOptions = {
    hearders: new HttpHeaders({
      'Content-type': 'application/json'
      )}

   return this.httpClient.request<AuthentificationResponse>('POST', url, {
      body: {
        username,
        password,
        role
       },
       headers: httpOptions.headers
      }).pipe(
        tap((daa: AuthentificationResponse)
          => AuthentificationService.setToken(data.token))
          );
    * */

    const response: AuthentificationResponse
      ={status: true, message: 'HTTP 200', token : 'atoken'};
    AuthentificationService.setToken('token');
    return of(response)
  }
}
