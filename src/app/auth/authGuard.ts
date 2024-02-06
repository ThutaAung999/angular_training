import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  /*ဒီ ကုဒ်က localStoragge နဲ့စမ်းထားတာ အဆင်ပြေတဲ့ code ပါ

  const token = localStorage.getItem('token');
  console.log("token :",token)
  if(token){
    return true;
  }
  else{
    const router=inject(Router);
    router.navigate(['login-page-page'])
    return false;
  }*/

  console.log("CanAvtivateFn   is called: ", " Route  : ", route)
  const authService = inject(AuthService);
  let isLoggedIn = authService.isAuthenticated();
  console.log("isLoggedIn :", isLoggedIn);

  if (isLoggedIn) {


    return true;
  } else {
    console.log('AuthGuard state.url ', state.url);
    router.navigate(['/login-page'], {
      queryParams: {
        redirectUrl: state.url
      }
    });
    return false;
  }
};

