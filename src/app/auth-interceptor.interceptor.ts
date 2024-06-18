import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jwtToken = localStorage.getItem('token');
    // Clone the request and add the authorization header
    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: jwtToken
        }
      });
    }

    // Pass the cloned request to the next handler
    return next.handle(request);
  }
}
