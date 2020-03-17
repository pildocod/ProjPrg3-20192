import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertyModel } from '../models/PropertyModel';

const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})

export class PropertyOperatorService {

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<PropertyModel[]> {
    return this.http.get<PropertyModel[]>(`${base_url}property/all`);
  }

  savePropertyData(property: PropertyModel): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(`${base_url}property`,
      property,
      {
        headers: new HttpHeaders({
          "content-type":"application/json"
        })
      });
  }

  putPropertyData(property: PropertyModel): Observable<PropertyModel>{
    return this.http.put<PropertyModel>(`${base_url}property`, property, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }
}
