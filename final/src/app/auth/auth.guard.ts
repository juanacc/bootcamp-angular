import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.user.pipe(map(user => !!user), tap(isAuth => {
            if (!isAuth)
                this.router.navigate(['/auth']);
            //TODO: completar version utilizando UrlTree
        }));
    }
}