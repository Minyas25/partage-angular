import { Component, OnInit } from '@angular/core';
import { Annonce, Emprunt } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit{
  annonce:Annonce;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService
  ) {}

  ngOnInit(): void {
    this.getAnnonceDetails();
  }

  // Méthode pour récupérer les détails de l'objet à partir de l'URL
  getAnnonceDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.annonceService.fetchOne(id).subscribe(
        (annonce: Annonce) => {
          this.annonce = annonce;
        },
        error => {
          console.error('Erreur lors de la récupération des détails de l\'objet :', error);
        }
      );
    }
  }

  // Méthode pour accepter une demande d'emprunt
  accepterDemande(emprunt: Emprunt): void {
    if (this.annonce && this.annonce.id !== undefined) {
      this.annonceService.mettreAJourStatutObjet(this.annonce.id, 'prêt en cours').subscribe(
        (response: any) => {
          console.log('Statut de l\'objet mis à jour en "prêt en cours"');
          // Mettre à jour la demande d'emprunt pour la marquer comme acceptée
          this.mettreAJourDemandeEmprunt(emprunt.id, 'acceptée');
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour du statut de l\'objet :', error);
        }
      );
    } else {
      console.error('L\'ID de l\'emprunt ou de l\'annonce n\'est pas défini.');
    }
  }
  

  // Méthode pour refuser une demande d'emprunt
  refuserDemande(emprunt: Emprunt): void {
    if (emprunt && emprunt.id !== undefined) {
      this.mettreAJourDemandeEmprunt(emprunt.id, 'refusée');
    }
  }

  // Méthode pour mettre à jour la demande d'emprunt
  mettreAJourDemandeEmprunt(idDemande: number, statut: string): void {
    if (idDemande !== undefined) {
      this.annonceService.mettreAJourDemandeEmprunt(idDemande, statut).subscribe(
        response => {
          console.log('Demande d\'emprunt mise à jour avec succès!');
          this.getAnnonceDetails();
        },
        error => {
          console.error('Erreur lors de la mise à jour de la demande d\'emprunt :', error);
        }
      );
    }
  }
}
