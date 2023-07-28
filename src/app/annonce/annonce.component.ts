import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annonce } from '../entities';
import { environment } from 'src/environments/environment';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{
  // @Input({ required: true })
  // annonce:Annonce;
  // serverUrl = environment.serverUrl;

  // @Output()
  // delete = new EventEmitter<Annonce>();

  // buttonPressed() {
  //   this.delete.emit(this.annonce);
  // }
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
