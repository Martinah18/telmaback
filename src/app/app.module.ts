import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AddOffreComponent } from './Components/add-offre/add-offre.component';
import { ListOffreComponent } from './Components/list-offre/list-offre.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AddForfaitComponent } from './Components/add-forfait/add-forfait.component';
import { ListForfaitComponent } from './Components/list-forfait/list-forfait.component';
import { HttpClientModule } from '@angular/common/http';
import { ValidationComponent } from './Components/validation/validation.component';
import { EditOffreComponent } from './Components/edit-offre/edit-offre.component';
import { EditForfaitComponent } from './Components/edit-forfait/edit-forfait.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatistiqueComponent } from './Components/statistique/statistique.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { OffresComponent } from './Pages/offres/offres.component';
import { ForfaitsComponent } from './Pages/forfaits/forfaits.component';
import { StatoffreComponent } from './Pages/Statistique/statoffre/statoffre.component';
import { StatComponent } from './Components/stat/stat.component';
import { FormstatComponent } from './Components/formstat/formstat.component';
import { LogincompComponent } from './Components/logincomp/logincomp.component';
import { DepotValidationComponent } from './Pages/depot-validation/depot-validation.component';
import { StatDataComponent } from './Pages/Statistique/stat-data/stat-data.component';
import { AddComponent } from './Pages/forfaits/add/add.component';
import { EditComponent } from './Pages/forfaits/edit/edit.component';
import { EditOComponent } from './Pages/offres/edit-o/edit-o.component';
import { ListDataComponent } from './Components/list-data/list-data.component';
import { AjoutDataComponent } from './Components/ajout-data/ajout-data.component';
import { DatasComponent } from './Pages/datas/datas.component';
import { ListTarifComponent } from './Components/list-tarif/list-tarif.component';
import { EditTarifComponent } from './Components/edit-tarif/edit-tarif.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddOffreComponent,
    ListOffreComponent,
    MenuComponent,
    AddForfaitComponent,
    ListForfaitComponent,
    ValidationComponent,
    EditOffreComponent,
    EditForfaitComponent,
    StatistiqueComponent,
    LogoutComponent,
    OffresComponent,
    ForfaitsComponent,
    StatoffreComponent,
    StatComponent,
    FormstatComponent,
    LogincompComponent,
    DepotValidationComponent,
    StatDataComponent,
    AddComponent,
    EditComponent,
    EditOComponent,
    ListDataComponent,
    AjoutDataComponent,
    DatasComponent,
    ListTarifComponent,
    EditTarifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
