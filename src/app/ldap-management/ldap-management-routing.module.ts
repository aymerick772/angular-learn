import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdpaAddComponent} from "./ldpa-add/ldpa-add.component";
import {LdpaEditComponent} from "./ldpa-edit/ldpa-edit.component";

const routes: Routes = [
  { path: 'users/list', component: LdapListComponent },
  { path: 'user/add', component: LdpaAddComponent },
  { path: 'user/:id', component: LdpaEditComponent },
  { path: '', redirectTo: 'users/list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LdapManagementRoutingModule { }
