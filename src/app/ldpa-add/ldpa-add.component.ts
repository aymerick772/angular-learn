import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailsComponent} from "../ldap-details/ldap-details.component";

@Component({
  selector: 'app-ldpa-add',
  templateUrl: '../ldap-details/ldap-details.component.html',
  styleUrls: ['../ldap-details/ldap-details.component.css']
})
export class LdpaAddComponent extends LdapDetailsComponent implements OnInit{
  constructor( private usersService: UsersService,
              route: ActivatedRoute,
              fb:FormBuilder,
              router : Router) {
    super(false, route, fb, router)
  }
  // ngOnInit(): void{
  //   super.onInit();
  // }

  validateForm(): void {
    console.log("LdapEditComponent - validateForm")
  }
}
