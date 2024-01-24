  import {CanActivateFn, Router} from '@angular/router';
  import {inject} from "@angular/core";
  import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
/*ဒီ ကုဒ်က localStoragge နဲ့စမ်းထားတာ အဆင်ပြေတဲ့ code ပါ

  const token = localStorage.getItem('token');
  console.log("token :",token)
  if(token){
    return true;
  }
  else{
    const router=inject(Router);
    router.navigate(['login-page'])
    return false;
  }*/

  console.log("CanAvtivateFn   is called")
  const authService=inject(AuthService);
  let isLoggedIn=authService.isAuthenticated();

  if(isLoggedIn){
    return true;
  }
  else{
    const router=inject(Router);
    router.navigate(['/login-page'])
    return false;
  }
};

