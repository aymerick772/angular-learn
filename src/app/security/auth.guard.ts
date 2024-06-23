import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "./authentification.service";

export const AuthGuard: CanActivateFn = (route, state) => {

  const router:Router = inject(Router);

  if(!AuthentificationService.isLoggedId()){
    router.navigate(['/login']).then((e:boolean)=>{
      if(!e){
        console.error('Navigation has failed ! ');
      }
    });
    return false;
  }
  return true;
};
