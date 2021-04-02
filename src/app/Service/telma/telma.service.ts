import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TelmaService {

  constructor() { }
 

  formOption (use_authorization = false) {
     const options = {headers :{}};
       if (use_authorization) {
         options['headers']['authorization'] = 'Bearer ' + sessionStorage.getItem("token");
       }
      return options;
  }

  isConnected(router : Router){
    const isConnected = this.verifyToken() ;
    if(!isConnected){
      router.navigate(['']);
    }
  }

  redirect(data: any,status : number, url : string, router : Router){
    
    if (typeof data!== 'undefined'){
      let stat = data.status;
        if(stat === status){
          router.navigate([url]);
        }
    }
    if (typeof data.error!== 'undefined'){
      let stat = data.status;
        if(stat === status){
          router.navigate([url]);
        }
    }
  }


  setTokenValue(data : any) : void{
    sessionStorage.setItem('token', data);
  } 

  verifyToken() : boolean{
    return sessionStorage.getItem('token') != null;
  }

  addToken(url : string){
    return url+"?token="+sessionStorage.getItem("token");
  }

  buildHeader(): any{
    const isConnected = this.verifyToken() ;
    const options = this.formOption(isConnected);
    return options;
  }

}
