import { TelmaService } from './../telma/telma.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http : HttpClient,private telma_service : TelmaService) { }

  // Login Admin
  login(email:string,mdp:string) : any{
    let data  = {"email":email,"mdp":mdp};
    return this.http.post(base_url,data);   
  }


  // get Actions en attente de validation

  getActions(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/validations",options);
  }

  // validation actions

  validerAction(id : any){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/validations/"+id,options);
  }

  getData(){
    const options = this.telma_service.buildHeader();
    return this.http.get(base_url+"admin/datas",options);
  }

  
}