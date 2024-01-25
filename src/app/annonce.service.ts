import { Injectable } from '@angular/core';
import { Annonce, Emprunt } from './entities';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  demandeEmprunt(demandeEmprunt: any){
    return this.http.get<Annonce[]>(environment.serverUrl+'/api/emprunt/')

  }

  mettreAJourStatutObjet(idObjet: number, nouveauStatut: string): Observable<any> {
    const requestBody = { statut: nouveauStatut };
    return this.http.put(environment.serverUrl + '/api/annonce/' + idObjet, requestBody);
  }

  // Méthode pour mettre à jour la demande d'emprunt
  mettreAJourDemandeEmprunt(idDemande: number, statut: string): Observable<any> {
    const requestBody = { statut: statut };
    return this.http.put(environment.serverUrl + '/api/emprunt/' + idDemande, requestBody);
  }

  // Méthode pour créer une nouvelle annonce
  creerAnnonce(annonce: Annonce): Observable<any> {
    return this.http.post<Annonce>(environment.serverUrl + `/api/annonce-create`, annonce);
  }
}
