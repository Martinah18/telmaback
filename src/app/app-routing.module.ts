import { ListTarifComponent } from './Components/list-tarif/list-tarif.component';
import { DatasComponent } from './Pages/datas/datas.component';
import { EditOComponent } from './Pages/offres/edit-o/edit-o.component';
import { EditComponent } from './Pages/forfaits/edit/edit.component';
import { AddComponent } from './Pages/forfaits/add/add.component';
import { StatDataComponent } from './Pages/Statistique/stat-data/stat-data.component';
import { DepotValidationComponent } from './Pages/depot-validation/depot-validation.component';
import { StatoffreComponent } from './Pages/Statistique/statoffre/statoffre.component';
import { ForfaitsComponent } from './Pages/forfaits/forfaits.component';
import { OffresComponent } from './Pages/offres/offres.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'offre', component: OffresComponent},
  { path: 'offre/:id', component: ForfaitsComponent},
  { path: 'validation', component: DepotValidationComponent},
  { path: 'offre/:id/ajouter', component: AddComponent},
  { path: 'offre/:id/modifier', component: EditOComponent},
  { path: 'offre/:id/forfait/:idForfait', component: EditComponent},
  { path: 'statistique/offres', component: StatoffreComponent },
  { path: 'statistique/datas', component: StatDataComponent },
  { path: 'deconnexion', component: LogoutComponent},
  { path: 'datas', component: DatasComponent},
  { path: 'tarifs', component: ListTarifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
