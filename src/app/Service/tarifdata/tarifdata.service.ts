import { TelmaService } from './../telma/telma.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarifdataService {
  

  constructor(private http : HttpClient, private telma_service: TelmaService) { }
  

  fillTarif(tarifConfig : any,reponse : any){
    var i = 0;
    let tarif = {};

    for(i = 0; i < tarifConfig.length ; i++){
      tarif[tarifConfig[i].nomData] = reponse[tarifConfig[i].nomData] ;
    }
    return tarif;
  }

  getData(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/datas",options);
  }

  ajouterData(data : any){
      let da = {"nomData": data};
      const options = this.telma_service.buildHeader();
      return this.http.post(base_url+"admin/datas",da,options);
  }
  supprimerData(idData : any){
    let da  ={"idData":idData};
    const options = this.telma_service.buildHeader();
    return this.http.put(base_url+"admin/datas",da,options);
  }

  getTarifs(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/tarifs",options);
  }

  getTarifById(idTarif : any){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/tarifs/"+idTarif,options);
  }

  ajouterTarif(data : any){
      const options = this.telma_service.buildHeader();
      return this.http.post(base_url+"admin/datas",data,options);
  }
  modifierTarif(idTarif : any,tarifConfig : any,reponse :any){
    let tarif = this.fillTarif(tarifConfig,reponse);
    const options = this.telma_service.buildHeader();
    return this.http.put(base_url+"admin/tarifs/"+idTarif,tarif,options);
  }

  getTarifAppel(){
    let url = "admin/tarifs/appels";
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+ url ,options);
  }
  

}
