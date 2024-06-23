import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdpaAddComponent} from "./ldpa-add/ldpa-add.component";
import {LdpaEditComponent} from "./ldpa-edit/ldpa-edit.component";
import {AuthGuard} from "../security/auth.guard"

const adminRoutes: Routes = [
  {
    path : 'users',
    canActivate : [AuthGuard],
    children: [
      { path: 'list', component: LdapListComponent },
      { path: 'add', component: LdpaAddComponent },
      { path: ':id', component: LdpaEditComponent },
      { path: '', redirectTo: '/users/list', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class LdapManagementRoutingModule { }
