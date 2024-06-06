import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapDetailsComponent} from "./ldap-details/ldap-details.component";
import {LdpaEditComponent} from "./ldpa-edit/ldpa-edit.component";
import {LdpaAddComponent} from "./ldpa-add/ldpa-add.component";

const routes: Routes = [

  { path: 'users/list', component: LdapListComponent },
  { path: 'user/add', component: LdpaAddComponent },
  { path: 'user/:id', component: LdpaEditComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
