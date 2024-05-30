import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserLdap} from "../models/user-ldap";
import {MatTableDataSource} from "@angular/material/table";
import {UsersService} from "../service/users.service";
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-ldap-details',
  templateUrl: './ldap-details.component.html',
  styleUrls: ['./ldap-details.component.css']
})
export class LdapDetailsComponent implements OnInit{
  user: UserLdap | undefined;
  processLoadRunning = false;
  processValidateRunning = false;
  userForm : FormGroup = this.fb.group({
    login : [''],
    nom : [''],
    prenom : [''],

    passwordGroup: this.fb.group({
      password : [''],
      confirmPassword:['']
    }),
    mail:{value:'', disabled: true},
  })
  constructor(
    private route :ActivatedRoute,
    private usersServices : UsersService,
    private fb: FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    const login = this.route.snapshot.paramMap.get('id');
    console.log("getUser = " + login)

    if(login === null){
      console.log('trouve pas luser avec lurl bro');
      return
    }
    this.usersServices.getUser(login).subscribe(
      user =>{
        this.user;
        console.log('ldapDetails getUSer = ' + user.mail)
      }
    )
  }
  goToLdap(){
    this.router.navigate(['/users/list']).then((e: boolean) =>{
      if(!e){
        console.error('Navigation has failed !');
      //   A continuer
      }
    });
  }

  onSubmitForm(){}
  updateLogin(){
    const control = this.userForm.get('login');
    if (control ===  null){
      console.error("L'objet 'login' du formulaire n'existe pas");
      return;
    }
    control.setValue((this.formGetValue('prenom') + '.' +
      this.formGetValue('nom')).toLowerCase());
    this.updateMail()
  }
  updateMail(){
    const control = this.userForm.get('mail');
    if(control === null){
      console.error("L'objet 'mail' du formulaire n'existe pas");
    }
    // a voir control ?
    control?.setValue(this.formGetValue('login').toLowerCase() + '@epsi.lan');
  }
  isFormValid(){
  return false;
  }

  private formGetValue(name: string) :any{
    const control = this.userForm.get(name);
    if(control === null){
      console.error("L'object " + name + "' du formulaire n'existe pas");
      return "";
    }
    return control.value
  }

}



