import { TarifdataService } from './../../Service/tarifdata/tarifdata.service';
import { Router } from '@angular/router';
import { TelmaService } from './../../Service/telma/telma.service';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../../Service/offre/offre.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css','./../../../assets/css/telma.css','./../../../assets/css/formAnim.css']
})
export class AddOffreComponent implements OnInit {

  @Output()  clickReloadData = new EventEmitter();
  
  offreConfig : any[] = [
    {"nomData" :"nomOffre","type":"text"},
    {"nomData" :"interne","type":"number"},
    {"nomData" :"autres","type":"number"},
    {"nomData" :"international","type":"number"},
    {"nomData" :"description","type":"textArea"}
  ];
  
  private reponse: any = [];
  
  tarif : any;
  form : FormGroup;
  message : string = "Creer une Offre";

  
  constructor(private offre_service : OffreService,private telma_service : TelmaService,private router: Router, private tarif_service : TarifdataService ) { 
    this.getTarifAppel();
  }

  ngOnInit(): void {
    
  }

  
  toFormGroup() {
    const group: any = {};
      group["nomOffre"] = new FormControl("",Validators.required);
      group["interne"] = new FormControl(this.tarif.interne,Validators.required);
      group["autres"] = new FormControl(this.tarif.autres,Validators.required);
      group["international"] = new FormControl(this.tarif.international,Validators.required);
      group["description"] = new FormControl("",Validators.required);
   
    this.form = new FormGroup(group);
  }

  
  fillFromForm() : void {
    this.offreConfig.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
  }

  ajouterOffre(){
    const success = data =>{
        if(data.data != null){
          this.message = data.message;
          this.clickReloadData.emit();
        }
        
        this.telma_service.redirect(data,401,"/",this.router);
     }

    const error = data =>{
        this.message = data.error.message;
        this.telma_service.redirect(data,401,"/",this.router);
    }

    this.fillFromForm();
    
    this.offre_service.ajouterOffre(this.offreConfig,this.reponse)
    .subscribe(success,error);
  }

  getTarifAppel(){
    const success = data =>{
      if(data.status == 200){
        this.message = data.message;
        this.tarif = data.data;
        this.toFormGroup() ;
      }
      this.telma_service.redirect(data,401,"/",this.router);
   }

  const error = data =>{
      this.message = data.error.message;
      this.telma_service.redirect(data,401,"/",this.router);
  }

  this.tarif_service.getTarifAppel().subscribe(success,error);
  }

  
}
