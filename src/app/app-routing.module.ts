import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { HomeComponent } from './home/home.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ObjectComponent } from './object/object.component';
import { AnnonceCreateComponent } from './annonce-create/annonce-create.component';
import { LivreDetailComponent } from './livre-detail/livre-detail.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'api/annonce', component:AnnonceComponent},
  {path: 'api/emprunt', component:EmpruntComponent},
  {path: 'api/objet/:id', component:ObjectComponent},
  {path: 'api/create', component:AnnonceCreateComponent},
  {path: 'api/livre/:id', component:LivreDetailComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
