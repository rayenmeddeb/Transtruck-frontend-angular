import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdreService {

  constructor(private http: HttpClient) { }

  afficher(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8090/ordres');
  }
  ajouter(depence: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:8090/ordres', depence);
  }

  supprimer(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8090/ordres/${id}`);
  }

  
  confirmer(id: number): Observable<void> {
    return this.http.put<any>(`http://localhost:8090/ordres/confirmer/${id}`,{});
  }
  

  afficheremail(id:any):Observable<any> {
    return this.http.get<any>('http://localhost:8090/clients/email/${id}');

  }
  private baseUrl = 'http://localhost:8090/clients';

 

  getEmail(clientId: number): Observable<string> {
    const url = `${this.baseUrl}/email/${clientId}`;
    return this.http.get(url, { responseType: 'text' });
  }

detail:any;

}
