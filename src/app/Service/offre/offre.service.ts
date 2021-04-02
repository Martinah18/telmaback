import { TelmaService } from './../telma/telma.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../../environments/environment';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http : HttpClient, private telma_service : TelmaService) { }


  fillOffre(offreConfig : any,reponse : any){
    var i = 0;
    var conflength = offreConfig.length;
    let offre = {};

    for(i = 0; i < conflength ; i++){
      offre[offreConfig[i].nomData] = reponse[offreConfig[i].nomData] ;
    }
    return offre;
  }
  // Ajout offres
  

  getOffreById(idOffre : string) :any {
    const options = this.telma_service.buildHeader();
    return  this.http.get(base_url+"offres/"+idOffre,options);
  }

  getAllOffres(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"offres",options);
  }

  ajouterOffre(offreConfig : any,reponse : any){
    let offre = this.fillOffre(offreConfig,reponse);
    const options = this.telma_service.buildHeader();
    return this.http.post(base_url+"admin/offres",offre,options);
  }

   modifierOffre(idOffre : any,offreConfig : any,reponse : any){
    let offre = this.fillOffre(offreConfig,reponse);
    const options = this.telma_service.buildHeader();
    return this.http.put(base_url+"admin/offres/"+idOffre,offre,options);
   }

   supprimerOffre(idOffre : any){
     let id = {"idOffre": idOffre};
    const options = this.telma_service.buildHeader();
    return this.http.put(base_url+"/admin/offres/delete",id,options);
    
   }
}
