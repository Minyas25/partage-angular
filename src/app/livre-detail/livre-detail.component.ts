import { Component, OnInit } from '@angular/core';
import { Annonce } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit{
  livre: Annonce;

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService
  ) { }

  ngOnInit(): void {
        this.getLivreDetail();
    }

  getLivreDetail(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Récupère l'ID de l'annonce à partir de l'URL
  if (idParam !== null) {
    const id = +idParam;
    if (!isNaN(id)) {
      this.annonceService.fetchOne(id) // Utilise un service pour récupérer les détails de l'annonce
        .subscribe(annonce => this.livre = annonce);
    } else {
      // Gérer le cas où l'ID n'est pas un nombre valide
    }
  } else {
    // Gérer le cas où l'ID n'est pas présent dans les paramètres de l'URL
  }
  }
}
