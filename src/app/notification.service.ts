import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }


  notification : any={

    "type": "",
      "message": "",
      "isRead": false
    
    
      };

     read :boolean=true;
     afficher(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:8090/api/notifications');
    }
       ajouter(notification:any):Observable<any[]>{


    

        return this.http.post<any[]>('http://localhost:8090/api/notifications',notification);
             

       }


       ajouternotification( notification:any){

        this.ajouter(notification).subscribe((res) => { console.log(res) });
         this.read=false;
        window.location.reload();
    
    
      }
    
    



}
