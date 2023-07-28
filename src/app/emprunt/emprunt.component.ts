import { Component } from '@angular/core';
import { Annonce } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {
  annoncesSelectionnees: Annonce[] = [];
  besoin: string;
  dateEmprunt: Date;

  constructor(private annonceService: AnnonceService) { }

  // Méthode pour envoyer la demande d'emprunt
  envoyerDemandeEmprunt(): void {
    // Créer l'objet de la demande d'emprunt avec les détails du formulaire
    const demandeEmprunt = {
      annonces: this.annoncesSelectionnees,
      besoin: this.besoin,
      dateEmprunt: this.dateEmprunt
    };

    // Envoyer la demande d'emprunt via le service AnnonceService
    this.annonceService.envoyerDemandeEmprunt(demandeEmprunt).subscribe(
      (response: any) => {
        // Traiter la réponse du serveur (si nécessaire)
        console.log('Demande d\'emprunt envoyée avec succès!');
      },
      (error: any) => {
        console.error('Erreur lors de l\'envoi de la demande d\'emprunt :', error);
      }
    );
  }

}
