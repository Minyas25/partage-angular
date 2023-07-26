import { Component, OnInit } from '@angular/core';
import { Annonce } from '../entities';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list:Annonce[] = [];

  constructor(private service:AnnonceService){}

  ngOnInit(): void {
    this.service.fetchAll()
    .subscribe(data => this.list = data);
  }

  // toList(annonce:Annonce) {
  //   this.service.add(annonce).subscribe(data => this.list.push(data));
  // }

  // removeMovie(annonce:Annonce) {
  //   if(annonce.id) {
  //     this.service.delete(annonce.id)
  //     .subscribe(() => this.list = this.list.filter(item => item.id != annonce.id));
  //   }
  // }

}
