import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { Annonce, Emprunt } from '../entities';

@Component({
  selector: 'app-annonce-create',
  templateUrl: './annonce-create.component.html',
  styleUrls: ['./annonce-create.component.css']
})
export class AnnonceCreateComponent {

  constructor(private annonceService: AnnonceService) {  }

@Input()
  NewAnnonce: Annonce = {
    title: '',
    description: '',
    date: new Date(),
    item: '',
    id_person: [],
    id_emprunt: []
  }; 

  @Output()
   added = new EventEmitter<Annonce>();

   OnSubmit() {

    this.added.emit(this.NewAnnonce);
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    // Ajoutez la logique pour traiter le fichier d'image (par exemple, le télécharger vers le serveur)
  }

}
