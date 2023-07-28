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

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.fetchAnnonces();
  }

  fetchAnnonces(): void {
    this.annonceService.fetchAll().subscribe(annonces => {
      this.annonces = annonces;
    });
  }
}
