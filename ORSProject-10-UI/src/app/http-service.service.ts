import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {}

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      callback(data);
    });
  }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint).subscribe((data) => {
      callback(data);
    });
  }

  // ✅ FINAL FIXED PDF METHOD
  getReport(url: string, token: string) {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    this.httpClient.get(url, {
      headers: headers,
      responseType: 'blob' // VERY IMPORTANT
    })
    .subscribe({
      next: (res: Blob) => {

        // ✅ Direct blob use karo (NO double blob)
        const fileURL = URL.createObjectURL(res);

        window.open(fileURL);
      },
      error: (err) => {
        console.error("❌ PDF Error:", err);
      }
    });
  }
}
