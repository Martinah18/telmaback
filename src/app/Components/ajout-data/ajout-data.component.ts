import { TelmaService } from './../../Service/telma/telma.service';
import { TarifdataService } from './../../Service/tarifdata/tarifdata.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-data',
  templateUrl: './ajout-data.component.html',
  styleUrls: ['./ajout-data.component.css','./../../../assets/css/telma.css','./../../../assets/css/formAnim.css']
})
export class AjoutDataComponent implements OnInit {

   @Output()  clickReloadData = new EventEmitter();
  
  form : FormGroup;
  message : string = "Ajouter un nouveau data";

  nom : any;
  constructor(private telma_service : TelmaService, private tarifdata_service : TarifdataService, private router: Router ) { 
    this.toFormGroup();
  }

  ngOnInit(): void {
    
  }

  
  toFormGroup() {
    const group: any = {};
    group["nom"] = new FormControl("",Validators.required);
    this.form = new FormGroup(group);
  }

  
  fillFromForm() : void {
    this.nom = this.form.get("nom")?.value;
  }

  ajouterData(){
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
    this.fillFromForm() ;
    this.tarifdata_service.ajouterData(this.nom).subscribe(success,error);
  }

}
