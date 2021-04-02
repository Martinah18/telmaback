import { StatService } from './../../Service/stat/stat.service';
import { OffreService } from './../../Service/offre/offre.service';
import { Component, OnInit } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TelmaService } from '../../Service/telma/telma.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css','./../../../assets/css/stat.css','./../../../assets/css/telma.css']
})
export class StatistiqueComponent implements OnInit {

   statData : [];
    
   offres : any;
   dataConfig : any = [
     {"nom" : "idoffre","value":"0"},
     {"nom" : "annee", "value":"2021"},
     {"nom" : "mois","value":"1"}
    ]
   form: FormGroup;
   reponse : any = [];

  constructor(private stat_service : StatService ,private offre_service : OffreService,
    private telma_service : TelmaService, private router : Router) {
    this.getAllOffres();
  }

ngOnInit(): void {
}


 getAllOffres(){
   const success = data =>{
     if(data.data !== null){
       this.offres = data.data;
       this.offres.push({"idOffre":0, "nomOffre":"Tous"});
       this.toFormGroup();
       console.log(this.offres); 
     }
  }
   const error = data =>{
     console.log(data.error);
   }
   this.offre_service.getAllOffres().subscribe(success,error);
 }

  
 toFormGroup() {
  const group: any = {};
  this.dataConfig.forEach(data => {
    group[data.nom] = new FormControl(data.value);
  });
  this.form = new FormGroup(group);
}

fillFromForm() : void {
  this.dataConfig.forEach(data => {
     console.log("res :"+this.reponse);
    this.reponse[data.nom] = this.form.get(data.nom)?.value;
  });
  console.log(this.reponse);
}

voirStat(){
  const success = data =>{
    console.log(data);
    if(data.data!=null){
      this.statData = data.data;
      console.log(this.statData);
      //  this.clickReloadData.emit(this.idOffre);
    }
    this.telma_service.redirect(data,401,"/",this.router);
   }

   const error = data =>{
     console.log(data.error.message);
     this.telma_service.redirect(data,401,"/",this.router);
   }

   this.fillFromForm();
   if(this.reponse["idoffre"] == 0){
     console.log(this.reponse);
     this.stat_service.getStatOffre(this.dataConfig,this.reponse)
     .subscribe(success,error);
   }else{
    console.log(this.reponse);
    this.stat_service.getStatForfait(this.dataConfig,this.reponse)
    .subscribe(success,error);
   }
}

   defaultStat(){
     const success = data =>{
       console.log(data);
       if(data.data!=null){
         this.statData = data.data;
         console.log(this.statData);
       }
      }
      const error = data =>{
        console.log(data.error.message);
      }
       console.log(this.reponse);
       this.stat_service.getStatForfait(this.dataConfig,this.reponse)
       .subscribe(success,error);
   }
}

