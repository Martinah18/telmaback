import { TelmaService } from './../../../Service/telma/telma.service';
import { AdminService } from './../../../Service/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { StatService } from '../../../Service/stat/stat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stat-data',
  templateUrl: './stat-data.component.html',
  styleUrls: ['./stat-data.component.css']
})
export class StatDataComponent implements OnInit {

  
  types : any =[];
  dataConfig = [
    {"nom" : "idData","value":"1"},
    {"nom" : "annee", "value":"2021"}
  ];
  
  statData : any;
  month = 1;
  chartConfig = {"axeX" : "Mois", "axeY":"Quantite de donnees fournies" ,"legende":"Donnees"};
  constructor(private stat_service:StatService ,private admin_service : AdminService,
    private telma_service : TelmaService, private router : Router) { }

  ngOnInit(): void {
    this.getData();
  }

  dataToTypes(data : any){
    this.types = [];
    var i = 0;
    for(i =0; i< data.length; i++){
      this.types.push({"id" : data[i].idData,"nom":data[i].nomData});
    }
  }
  
  getData(){
    const success = data =>{
      if(data.data !== null){
        this.dataToTypes(data.data);
      }
  }
    const error = data =>{
    }
    this.admin_service.getData().subscribe(success,error);
  }


  voir($event){
    const success = data =>{
      if(data.status == 200){
        this.statData = data.data;
        this.telma_service.redirect(data,401,"/",this.router);
        //  this.clickReloadData.emit(this.idOffre);
      }
     }
  
     const error = data =>{
       this.telma_service.redirect(data,401,"/",this.router);
     }
    this.stat_service.getStatData(this.dataConfig,$event).subscribe(success,error);
  }

}
