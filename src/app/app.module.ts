import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LdapListComponent } from './ldap-management/ldap-list/ldap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppMaterialModule} from "./app-material.module";
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LdapDetailsComponent } from './ldap-management/ldap-details/ldap-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LdpaEditComponent } from './ldap-management/ldpa-edit/ldpa-edit.component';
import { LdpaAddComponent } from './ldap-management/ldpa-add/ldpa-add.component';
import { AlertComponent } from './share/alert/alert.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import { LdapManagementModule } from './ldap-management/ldap-management.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LdapManagementModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [ {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue : {duration : 2500,
      verticalPosition: 'top'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
