import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailsComponent} from "../ldap-details/ldap-details.component";

@Component({
  selector: 'app-ldpa-edit',
  templateUrl: '../ldap-details/ldap-details.component.html',
  styleUrls: ['../ldap-details/ldap-details.component.css']
})
export class LdpaEditComponent extends LdapDetailsComponent implements OnInit{
    constructor( private usersService: UsersService,
                 route: ActivatedRoute,
                 fb:FormBuilder,
                 router : Router) {
      super(false, route, fb, router)
    }
    // ngOnInit(): void{
    //   super.onInit();
    // }

  // private getUser(){
  //   const login = this.route.snapshot.paramMap.get('id');
  //   console.log("getUser = " + login)
  //
  //   if(login === null){
  //     console.log('trouve pas luser avec lurl bro');
  //     return
  //   }
  //   this.usersServices.getUser(login).subscribe(
  //     user =>{
  //       this.user;
  //       console.log('ldapDetails getUSer = ' + user.mail)
  //     }
  //   )
  // }

    validateForm(): void {
      console.log("LdapEditComponent - validateForm")
    }
}
