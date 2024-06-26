import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../../models/user-ldap";
import {MatPaginator} from "@angular/material/paginator";
import {LDAP_USERS} from "../../models/ldap-mock-data";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UsersService} from "../../service/users.service";
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap> ([]);
  unactiveSelected = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | null;

  constructor(private usersServices : UsersService, private router : Router) {
    this.paginator = null;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate (data, filter);
    this.getUsers();

  }
  filterPredicate (data : UserLdap, filter : string): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }
  applyFilter ($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator);
    this.getUsers()
  }
  addUser(){
    this.router.navigate(['users/add']).then( (e) =>{
      if(! e) {
        console.log('Navigation has failed!')
      }
    })
  }








  private getUsers():void {

    this.usersServices.getUsers().subscribe(
      users => {
        if (this.unactiveSelected) {
          this.dataSource.data = LDAP_USERS.filter((user: UserLdap) =>
            !user.active);
        }
        else {
          this.dataSource.data = LDAP_USERS;
        }
      }
    )
}

  edit(login: string){
    this.router.navigate(['users/', login]).then((e : boolean) =>{
      if(!e){
        console.error('Navigation has failed !')
      }
    })
  }

unactiveChanged($event: MatSlideToggleChange): void{
  this.unactiveSelected = $event.checked;
this.getUsers();
}}
