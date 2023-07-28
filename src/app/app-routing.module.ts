import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { HomeComponent } from './home/home.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ObjectComponent } from './object/object.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'api/annonce', component:AnnonceComponent},
  {path: 'api/emprunt', component:EmpruntComponent},
  {path: 'api/objet/:id', component:ObjectComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
