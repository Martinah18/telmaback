import { Router } from '@angular/router';
import { TelmaService } from './../../../Service/telma/telma.service';
import { StatService } from './../../../Service/stat/stat.service';
import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../../Service/offre/offre.service';

@Component({
  selector: 'app-statoffre',
  templateUrl: './statoffre.component.html',
  styleUrls: ['./statoffre.component.css','./../../../../assets/css/stat.css','./../../../../assets/css/telma.css']
})
export class StatoffreComponent implements OnInit {

  types : any =[];
  dataConfig = [
    {"nom" : "idoffre","value":"0"},
    {"nom" : "annee", "value":"2021"},
    {"nom" : "mois","value":"1"}
  ];
  statData : any;
  month = 1;
  chartConfig = {"axeX" : "Offres", "axeY":"Nombre de Vente" ,"legende":"Vente Offres"};
  constructor(private stat_service:StatService, private  offre_service: OffreService,
    private telma_service : TelmaService, private router : Router) { }

  ngOnInit(): void {
    this.getAllOffres();
  }

  dataToTypes(data : any){
    this.types = [];
    var i = 0;
    for(i =0; i< data.length; i++){
      this.types.push({"id" : data[i].idOffre,"nom":data[i].nomOffre});
    }
    this.types.push({"id" : 0,"nom":"Offres"});
  }
  
  getAllOffres(){
    const success = data =>{
      if(data.data !== null){
        this.dataToTypes(data.data);
      }
  }
    const error = data =>{
    }
    this.offre_service.getAllOffres().subscribe(success,error);
  }


  voir($event){
    const success = data =>{
      if(data.status == 200){
        this.statData = data.data;
        //  this.clickReloadData.emit(this.idOffre);
      }
      this.telma_service.redirect(data,401,"/",this.router);
     }
  
     const error = data =>{
       console.log(data);
       this.telma_service.redirect(data,401,"/",this.router);
     }
  
     if($event["idoffre"] == 0){
       this.stat_service.getStatOffre(this.dataConfig,$event).subscribe(success,error);
     }else{
      this.stat_service.getStatForfait(this.dataConfig,$event).subscribe(success,error);
     }
  }
  
}



