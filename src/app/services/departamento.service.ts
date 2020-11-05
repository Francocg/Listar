import { Injectable } from '@angular/core';
import {Departamento} from '../models/departamento';
import {Observable, Subscription,of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private HttpHeaders = new HttpHeaders({'Content-Tipe':'application/json'});
  private DepartamentoUrl:string = 'http://localhost:8080/departamento/all';
  constructor(private http: HttpClient) { }
  getDepartamento():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(this.DepartamentoUrl);
  }
}
