import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('🔐 Interceptor running...');

    const token = localStorage.getItem('token');

    // ✅ Agar token hai
    if (token) {

      if (req.body instanceof FormData) {
        return next.handle(req);
      }

      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(req).pipe(

      catchError((error: HttpErrorResponse) => {

        console.log("❌ Error:", error);

        // 🔐 Unauthorized
        if (error.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: error.error }
          });
        }

        // 🔐 Forbidden / Token expired
        if (error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login'], {
            queryParams: { errorMessage: 'Token expired... login again' }
          });
        }

        return throwError(error);
      })
    );
  }
}