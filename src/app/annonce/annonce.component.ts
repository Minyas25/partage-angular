import { Component, OnInit} from '@angular/core';
import { Annonce } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  
  annonces: Annonce[] = [];
  nouvelleAnnonce: Annonce; // Nouvelle annonce à créer
  constructor(private annonceService: AnnonceService) {
    // Initialisez la nouvelle annonce ici
    this.nouvelleAnnonce = {
      title: '',
      description: '',
      date: new Date(),
      item: '',
      id_person: [],
      id_emprunt: []
    };
   }

  ngOnInit(): void {
    this.fetchAnnonces();
  }
  
  onImageChange(event: any): void {
    const file = event.target.files[0];
    // Ajoutez la logique pour traiter le fichier d'image (par exemple, le télécharger vers le serveur)
  }
  
  fetchAnnonces(): void {
    this.annonceService.fetchAll().subscribe(annonces => {
      this.annonces = annonces;
    });
  }

  creerAnnonce(): void {
    // Vérifiez si les champs obligatoires sont renseignés
    if (!this.nouvelleAnnonce.title || !this.nouvelleAnnonce.description) {
      // Gérez le cas où des champs obligatoires sont manquants
      console.error('Veuillez renseigner tous les champs obligatoires.');
      return;
    }

    // Appelez le service pour créer une nouvelle annonce
    this.annonceService.creerAnnonce(this.nouvelleAnnonce)
    .subscribe(
      (annonceCreee: Annonce) => {
        console.log('Annonce créée avec succès!', annonceCreee);
        // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
        this.nouvelleAnnonce = {
          title: '',
          description: '',
          date: new Date(),
          item: '',
          id_person: [],
          id_emprunt: []
        };
        // Mettez à jour la liste des annonces
        this.fetchAnnonces();
      },
      (erreur) => {
        console.error('Erreur lors de la création de l\'annonce', erreur);
      }
    );
    console.log('Après l\'appel au service');
  }
}
