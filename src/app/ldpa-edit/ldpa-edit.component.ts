import {Component, OnInit} from '@angular/core';
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {LdapDetailsComponent} from "../ldap-details/ldap-details.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserLdap} from "../models/user-ldap";

@Component({
  selector: 'app-ldpa-edit',
  templateUrl: '../ldap-details/ldap-details.component.html',
  styleUrls: ['../ldap-details/ldap-details.component.css']
})
export class LdpaEditComponent extends LdapDetailsComponent implements OnInit{
    constructor( private usersService: UsersService,
                 private route: ActivatedRoute,
                 fb:FormBuilder,
                 router : Router,
                 private snackBar: MatSnackBar) {
      super(false, fb, router)
    }
    ngOnInit(): void{
      super.onInit();
      // A voir ...
      this.getUser();
    }

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
      console.log("LdapEditComponent - validateForm");
      this.processValidateRunning = true;
      this.usersService.updateUser(this.getUserFromFormControl()).subscribe({
        next: (value : UserLdap) =>{
          this.processValidateRunning = false;
          this.errorMessage = '';
          this.snackBar.open('Utilisateur non modifié ! ', 'X')
        }
      })
    }

    private getUser():void{
      const login = this.route.snapshot.paramMap.get('id');
      if(login === null){
        console.error("Can't retreive user if from URL");
        return;
      }
      this.usersService.getUser(login)
        .subscribe({
          next : (user) =>{
            this.user= user;
            this.copyUserToFormControl();
            console.log('LdapDetails getUSer =', user)
          },
          error : err => {
            this.processValidateRunning = false;
            this.errorMessage = "L'utilisateur n'existe pas !";
            console.error('Obtention utilisateur', err);
            this.snackBar.open('Utilisateur non trouvé !', 'X');
          }
        })
    }
}
