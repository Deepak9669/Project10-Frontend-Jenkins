import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

    constructor(private httpClient: HttpClient, private router: Router,) {}

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      callback(data);
    } ,(error) => {
        this.handleError(error, callback);
      }
    );
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint).subscribe((data) => {
      callback(data);
    }, (error) => {
        this.handleError(error, callback);
      }
    );
  }

getReport(url: string, token: string) {
  this.httpClient.get(url, {
    headers: {
      Authorization: 'Bearer ' + token
    },
    responseType: 'blob' // important for PDF
  })
  .subscribe((res: any) => {

    const file = new Blob([res], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);

    window.open(fileURL); // opens PDF in new tab
  });
}

 private handleError(error: any, callback: any) {

  if (error.status === 401) {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

    if (error.status === 503) {
      callback({
        success: false,
        result: {
          message: error.error?.result?.message
        }
      })
    }
  }
}