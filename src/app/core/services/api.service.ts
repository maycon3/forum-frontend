import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";

@Injectable()
export class ApiService {

  get apiHostUrl(): string {
    if(environment.production) {
      return environment.api;
    }
    return environment.api;
  }

  constructor(private http: HttpClient) { }

  get<T = any>(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get<T>(`${this.apiHostUrl}${url}`,
      {
        headers: this.headers,
        params
      }
    );
  }

  post<T = any>(url: string, data: unknown = {}): Observable<any> {
    return this.http.post<T>(`${this.apiHostUrl}${url}`, data,
      {
        headers: this.headers
      }
    );
  }

  put<T = any>(url: string, data: unknown = {}): Observable<any> {
    return this.http.put<T>(`${this.apiHostUrl}${url}`, data,
      {
        headers: this.headers
      }
    );
  }

  datele<T = any>(url: string): Observable<any> {
    return this.http.delete<T>(`${this.apiHostUrl}${url}`,
      {
        headers: this.headers
      }
    );
  }


  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
