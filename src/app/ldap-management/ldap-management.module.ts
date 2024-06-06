import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import {AppMaterialModule} from "../app-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AlertComponent} from "../share/alert/alert.component";
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdpaAddComponent} from "./ldpa-add/ldpa-add.component";
import {LdpaEditComponent} from "./ldpa-edit/ldpa-edit.component";


@NgModule({
  declarations: [
    LdapListComponent,
    LdpaAddComponent,
    LdpaEditComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LdapManagementRoutingModule

  ]
})
export class LdapManagementModule { }
