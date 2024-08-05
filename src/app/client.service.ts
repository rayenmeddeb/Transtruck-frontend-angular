import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  afficher(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8090/clients');
  }
  ajouter(depence: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8090/clients', depence);
  }

  supprimer(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8090/clients/${id}`);
  }
}
