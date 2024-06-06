import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailsComponent} from "../ldap-details/ldap-details.component";

import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmValidParentMatcher} from "../ldap-details/passwords-validator.directive";

@Component({
  selector: 'app-ldpa-add',
  templateUrl: '../ldap-details/ldap-details.component.html',
  styleUrls: ['../ldap-details/ldap-details.component.css']
})
export class LdpaAddComponent extends LdapDetailsComponent implements OnInit{
  constructor( private usersService: UsersService,
              route: ActivatedRoute,
              fb:FormBuilder,
              router : Router,
               private snackBar : MatSnackBar) {
    super(false, fb, router)
  }
  // ngOnInit(): void{
  //   super.onInit();
  // }

  ngOnInit(): void {
    super.onInit()
  }


  validateForm(): void {
    console.log("LdapEditComponent - validateForm")

    this.processValidateRunning = true;
    this.usersService.addUser(this.getUserFromFormControl()).subscribe({
      next: (value) =>{
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Utilisateur ajouté !', 'X');
        },
      error : err => {
        this.processValidateRunning = false;
        console.error('Ajour utilisateur', err);
        this.errorMessage ="l'utilisateur n'a pas pu être ajouté !";
        this.snackBar.open("Erreur dans l'ajout de l'utilisateur", 'X');
        }
      });
  }

}
