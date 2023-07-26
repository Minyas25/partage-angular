import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Annonce } from '../entities';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  @Input({ required: true })
  annonce:Annonce;
  serverUrl = environment.serverUrl;

  @Output()
  delete = new EventEmitter<Annonce>();

  buttonPressed() {
    this.delete.emit(this.annonce);
  }
}
