import { OffreService } from './../../Service/offre/offre.service';
import { TelmaService } from './../../Service/telma/telma.service';
import { ForfaitService } from './../../Service/forfait/forfait.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-forfait',
  templateUrl: './add-forfait.component.html',
  styleUrls: ['./add-forfait.component.css','./../../../assets/css/telma.css','./../../../assets/css/formAnim.css','./../../../assets/css/titre.css']
})

export class AddForfaitComponent implements OnInit {
 
  @Output()  clickReloadData = new EventEmitter();
  @Input() idOffre ;

  form : FormGroup;
  reponse : any = [];
  message: any;

  forfaitConfig : any[] = [
    {"idData" :0,"nomData" :"nomforfait","type":"text"},
    {"idData" :1,"nomData" :"prix","type":"number"},
    {"idData" :2,"nomData" :"validite","type":"number"},
    {"idData" :3,"nomData" :"code","type":"text"},
    {"idData" :9,"nomData" :"description","type":"textArea"},
  ];

  forfaitData : any[] ;
  offre : any;

  constructor(private forfait_service : ForfaitService,private offre_service : OffreService,private telma_service : TelmaService, private router : Router) { 
      this.getDataForfait();
  }

  ngOnInit(): void {
  }
  
  toFormGroup() {
    const group: any = {};
    this.forfaitConfig.forEach(data => {
      group[data.nomData] = new FormControl();
    });
    this.forfaitData.forEach(data => {
      group[data.nomData] = new FormControl();
    });
    this.form = new FormGroup(group);
  }

  getOffre(){
    const success = data =>{
      if(data.status == 200){
        this.offre = data.data; 
      }
      this.telma_service.redirect(data,401,"/",this.router);
   }

    const error = data =>{
      this.telma_service.redirect(data,401,"/",this.router);
    }

    this.offre_service.getOffreById(this.idOffre).subscribe(success,error);
  }

  fillFromForm() : void {
    this.forfaitConfig.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
    this.forfaitData.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
  }

  ajouterForfait(){
   const success = data =>{
     console.log(data);
     if(data.data!=null){
        this.clickReloadData.emit(this.idOffre);
     }
     this.telma_service.redirect(data,401,"/",this.router);
    }

    const error = data =>{
      console.log(data);
      this.telma_service.redirect(data,401,"/",this.router);
      this.message = data.error.message;
    }

    this.fillFromForm();
    console.log(this.reponse);
    this.forfait_service.ajouterForfait(this.idOffre,this.forfaitConfig,this.forfaitData,this.reponse)
    .subscribe(success,error);
    
  }

  getDataForfait(){
    const success = data =>{
       if(data.data!=null){
          this.forfaitData = data.data;
          this.getOffre();
          this.toFormGroup();
      }
    }
    const error = data =>{
     }
    this.forfait_service.getDataForfait().subscribe(success,error);
  }
}
