import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LdapListComponent} from "./ldap-management/ldap-list/ldap-list.component";
import {LdapDetailsComponent} from "./ldap-management/ldap-details/ldap-details.component";
import {LdpaEditComponent} from "./ldap-management/ldpa-edit/ldpa-edit.component";
import {LdpaAddComponent} from "./ldap-management/ldpa-add/ldpa-add.component";
import {LoginComponent} from "./security/login/login.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'users/list', pathMatch: 'full' },

  { path: 'add', component: LdpaAddComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
