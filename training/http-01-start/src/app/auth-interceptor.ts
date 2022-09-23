import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators'

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('interceptor auth!!!!')
        console.log(req.url);
        const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') })
        return next.handle(modifiedRequest)
    }
}