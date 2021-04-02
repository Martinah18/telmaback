import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../../environments/environment';
import { TelmaService } from '../telma/telma.service';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  
  constructor(private http : HttpClient, private telma_service : TelmaService) { }

  fillStat(dataConfig : any,reponse : any, indice : number){
    let res = {};
    var i  = 0;
    for(i = indice; i < dataConfig.length ; i++){
      res[dataConfig[i].nom] = reponse[dataConfig[i].nom] ;
    };
    return res;
  }
  getStatOffre(dataConfig : any,reponse : any){
    let res = this.fillStat(dataConfig,reponse,1);
    const options = this.telma_service.buildHeader();
    return this.http.post(base_url+"admin/offres/stats",res,options);
  }

  getStatForfait(dataConfig : any,reponse : any){
    let res = this.fillStat(dataConfig ,reponse,0);
    const options = this.telma_service.buildHeader();
    return this.http.post(base_url+"admin/forfaits/stats",res,options);
  }

  getStatData(dataConfig : any, reponse : any){
    let res = this.fillStat(dataConfig ,reponse,0);
    const options = this.telma_service.buildHeader();
    return this.http.post(base_url+"admin/consommation/datas/stats",res,options);
  }
}
