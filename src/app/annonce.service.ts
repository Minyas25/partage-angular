import { Injectable } from '@angular/core';
import { Annonce } from './entities';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }
  fetchAll() {
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/annonce')
    //pfff
    // .pipe(map(data => data.map(item => ({...item, released:item.released.substring(0,10)}))));
  }

  fetchOne(id:any) {
    return this.http.get<Annonce>(environment.serverUrl+'/api/annonce/'+id)
    ;
  }
}
