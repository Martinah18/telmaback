import { TelmaService } from './../../Service/telma/telma.service';
import { Router } from '@angular/router';
import { AdminService } from './../../Service/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css','./../../../assets/css/tableSort.css','./../../../assets/css/titre.css']
})
export class ValidationComponent implements OnInit {

  public actions = [];
  public message : string;

  constructor(private admin_service : AdminService, private router : Router, private telma_service : TelmaService) { }

  ngOnInit(): void {
    this.getActions();
  }

  getActions() : void {
      const success = data =>{
        if(data.status == 200){
          this.actions = data.data;
          console.log(this.actions); 
        }
     }

      const error = data =>{
      }

      this.admin_service.getActions().subscribe(
        success, error
      );
  }

  validerAction(id :any ){
    const success = data =>{
      this.message = data.message;
      this.telma_service.redirect(data,401,"/",this.router);
   }
   const error =  data=>{
    this.message = data.message;
    this.telma_service.redirect(data,401,"/",this.router);
 }
    this.admin_service.validerAction(id).subscribe(success,error);
    //refresh page
    location.reload();
  }

 
 


}
