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
export abstract class LdapDetailsComponent implements OnInit{

  passwordPlaceHolder : string;
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
    public addForm : boolean,
    public route :ActivatedRoute,
    public fb: FormBuilder,
    public router : Router

  ) {
    this.passwordPlaceHolder = "Mot de passe" + (this.addForm ? '' : '(vide si inchangé)')
  }

  onInit():void{

  }

  ngOnInit(): void {
    // this.getUser();
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
  goToLdap(){
    this.router.navigate(['/users/list']).then((e: boolean) =>{
      if(!e){
        console.error('Navigation has failed !');
      //   A continuer
      }
    });
  }

  onSubmitForm(){
    this.validateForm();
  }

  abstract validateForm() : void


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
  return this.userForm.valid
    && (!this.addForm || this.formGetValue('passwordGroup.password') != '');
  }

  private formGetValue(name: string) :string{
    const control = this.userForm.get(name);
    if(control === null){
      console.error("L'object " + name + "' du formulaire n'existe pas");
      return "";
    }
    return control.value
  }

  private formSetValue(name: string, value : string | number): void{
    const control = this.userForm.get(name);
    if(control === null){
      console.log("l'object '" + name + "' du formulaire n'existe pas");
      return;
    }
    control.setValue(value)
  }

  protected copyUserToFormControl() : void{
    if(this.user === undefined){
      return;
    }
    this.formSetValue('login', this.user.login);
    this.formSetValue('nom', this.user.nom);
    this.formSetValue('prenom', this.user.prenom);
    this.formSetValue('mail', this.user.mail);
  //   ne pas oublier le reste !!!
  }

  protected getUserFromFormControl(): UserLdap{

    return{
      login: this.formGetValue('login'),
      nom: this.formGetValue('nom'),
      prenom: this.formGetValue('prenom'),
      mail: this.formGetValue('mail'),
      employeNiveau : 1,
      employeNumero : 1,
      publisherId : 1,
      active : true,
      motDePasse : '',
      role : 'ROLE_USER',
      dateEmbauche: "2020-04-04",
      nomComplet: this.formGetValue('nom') + " " + this.formGetValue('prenom'),
    }
  }



}



