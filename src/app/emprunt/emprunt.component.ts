import { Component, OnInit } from '@angular/core';
import { Annonce, Emprunt } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit{
  annoncesSelectionnees: Annonce[] = [];
  emprunt: Emprunt = {
    id: 0,
    message: new Text(),
    date: new Date(),
    status: 'En attente', // valeur par défaut 'En attente'
    id_person: [],
    id_annonce: [],
  
  };

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {}

  demandeEmprunt(): void {
    console.log(this.emprunt);

    // Envoyer la demande d'emprunt au service AnnonceService pour traitement
    this.annonceService.demandeEmprunt(this.emprunt).subscribe(
      (response: any) => {
        console.log("Demande d'emprunt envoyée avec succès!");
        this.reset();
      },
      (error: any) => {
        console.error('Erreur lors de l\'envoi de la demande d\'emprunt :', error);
      }
    );
  }

  // Réinitialiser le formulaire après envoi
  reset(): void {
    this.emprunt.message = new Text();
    this.emprunt.date = new Date();
    this.emprunt.status = 'En attente'; // Remettre le statut par défaut à "En attente"
  }

}
