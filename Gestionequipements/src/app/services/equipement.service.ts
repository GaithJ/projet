import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devis } from '../model/devis';
//import { Categorie } from '../model/categorie';
import { equipement } from '../model/equipement';
import { intervention } from '../model/intervention';
import { register } from '../model/register';
import { reparation } from '../model/reparation';
import { service } from '../model/service';
import { travaux } from '../model/travaux';

const httpOptions = {
  headers: new HttpHeaders
    ({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class EquipementService {
  supprimerEquipement(element: any) {
    throw new Error('Method not implemented.');
  }
 
  equipements!: equipement[];
  equipement: any;
  

 
  // nomCat: string | undefined

  url = 'http://localhost:3000/mylist'
  url1 = 'http://localhost:3000/service'
  url2='http://localhost:3000/intervention'
  url3='http://localhost:3000/devis'
  url4='http://localhost:3000/reparation'
  url5='http://localhost:3000/travaux'
  url6='http://localhost:3000/mylistbyservice'
  url7= 'http://localhost:3000/register'


  
  
  


  constructor(private http: HttpClient) { }

  getall(): Observable<equipement[]> {
    return this.http.get<equipement[]>(`${this.url}`)

  }
  getallfiche(): Observable<intervention[]> {
    return this.http.get<intervention[]>(`${this.url2}`)

  }
  getallfax():Observable<intervention[]> {
    return this.http.get<intervention[]>(`${this.url2}`)

  }
  getallser(): Observable<service[]> {
    return this.http.get<service[]>(`${this.url1}`)
  }
  addequipement(data: equipement): Observable<equipement[]> {
    // console.log(data);
    
    return this.http.post<equipement[]>(`${this.url}`, data, httpOptions)
  }
  



getbyid(id:number): Observable<equipement[]> {
  return this.http.get<equipement[]>(`${this.url}/${id}`)
}
getbyser(ser:string): Observable<equipement[]> {
  return this.http.get<equipement[]>(`${this.url6}`, )
}
updateequipement(data:equipement): Observable<equipement> {
  console.log('data : ',data);
  return this.http.put<equipement>(`${this.url}/${data.id}`,data,httpOptions)
}
deleteequipement(id:number): Observable<equipement>{
  console.log
  return this.http.delete<equipement>(`${this.url}/${id}`)
}
getintervention(): Observable<intervention[]> {
  return this.http.get<intervention[]>(`${this.url2}`)
}

addintervention(data:intervention ): Observable<intervention[]> { 
    
  return this.http.post<intervention[]>(`${this.url2}`, data)
}
getdevis(): Observable<devis[]> {
  return this.http.get<devis[]>(`${this.url3}`)

}
adddevis(data:devis ): Observable<devis[]> {
 
  
  return this.http.post<devis[]>(`${this.url3}`, data, httpOptions)
  
   
 
}
addrep(data:reparation ): Observable<reparation[]> {
  
  return this.http.post<reparation[]>(`${this.url4}`, data, httpOptions)
  
    
}
addtra(data:travaux ): Observable<travaux[]> {
  
  return this.http.post<travaux[]>(`${this.url5}`, data, httpOptions)
  
    
}


  register(data: any): Observable<register[]> {
    
    
    return this.http.post<register[]>(`${this.url7}`, data, httpOptions)
  }



}
