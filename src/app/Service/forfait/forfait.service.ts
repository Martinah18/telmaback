import { TelmaService } from './../telma/telma.service';
import { Injectable } from '@angular/core';
import { base_url } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private http : HttpClient, private telma_service: TelmaService) { }

  fillForfait(forfaitConfig :any , forfaitData: any, reponse : any){
    var i = 0;
    var conflength = forfaitConfig.length;
    var datalength = forfaitData.length;
    let forfait = {"datas":[]};

    for(i = 0; i < conflength ; i++){
      forfait[forfaitConfig[i].nomData] = reponse[forfaitConfig[i].nomData] ;
    }

    for(i = 0; i < datalength ; i++){
      if(reponse[forfaitData[i].nomData] !== null){
        let datas ={};
        datas["idData"] = forfaitData[i].idData;
        datas["quantite"] = reponse[forfaitData[i].nomData];
        datas["nomData"] = forfaitData[i].nomData;
        forfait.datas.push(datas);
      }
    };
    return forfait;
  }

   getForfaitById(idForfait : String) {
     const options = this.telma_service.buildHeader();
     return  this.http.get(base_url+"forfaits/"+idForfait,options);
   }

  // // Ajout Forfait

   ajouterForfait(idOffre: string,forfaitConfig :any, forfaitData : any, reponse :any){
     let forfait = this.fillForfait(forfaitConfig , forfaitData, reponse);
     const options = this.telma_service.buildHeader();
    return this.http.post(base_url+"offres/"+idOffre+"/forfaits",forfait,options);
   }

  getAllForfaits(idOffre : string){
    // const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"offres/"+idOffre+"/forfaits");
   }

   modifierForfait(idForfait : any,forfaitConfig : any,forfaitData : any,reponse : any){
     let forfait = this.fillForfait(forfaitConfig,forfaitData,reponse);
     const options = this.telma_service.buildHeader();
     return this.http.put(base_url+"admin/forfaits/"+idForfait,forfait,options);
   }

   supprimerForfait(idForfait : any){
    const options = this.telma_service.buildHeader();
    let id = {"idForfait" : idForfait};
    return this.http.put(base_url+"admin/forfaits/delete",id,options);
   }

  getDataForfait(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/datas",options);
  }

}
