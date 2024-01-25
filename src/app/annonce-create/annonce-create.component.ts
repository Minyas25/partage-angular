import { Component } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce, Emprunt } from '../entities';

@Component({
  selector: 'app-annonce-create',
  templateUrl: './annonce-create.component.html',
  styleUrls: ['./annonce-create.component.css']
})
export class AnnonceCreateComponent {

  annonce: Annonce []= [];
  NewAnnonce: Annonce; // Nouvelle annonce à créer

  constructor(private annonceService: AnnonceService) {
    this.NewAnnonce = {
      title: '',
      description: '',
      date: new Date(),
      item: '',
      id_person: [],
      id_emprunt: []
    };
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    // Ajoutez la logique pour traiter le fichier d'image (par exemple, le télécharger vers le serveur)
  }

  creerAnnonce() {
    this.annonceService.creerAnnonce(this.NewAnnonce).subscribe({
      next: response => {
        console.log('Réponse de l\'API:', response);
        // Ajoutez ici la logique nécessaire après la création de l'annonce
      },
      error: error => {
        console.error('Erreur lors de la création de l\'annonce:', error);
        // Ajoutez ici la logique de gestion des erreurs
      }
    });
  }
}
