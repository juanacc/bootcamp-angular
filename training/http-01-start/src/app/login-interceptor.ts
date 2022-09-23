import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators'

export class LoginInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('interceptor login!!!!')
        console.log(req.url);
        console.log(req.headers);
        return next.handle(req).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived, body data: ', event.body);
            }
        }));
    }
}