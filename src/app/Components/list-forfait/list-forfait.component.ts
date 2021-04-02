import { TelmaService } from './../../Service/telma/telma.service';
import { OffreService } from './../../Service/offre/offre.service';
import { ForfaitService } from './../../Service/forfait/forfait.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-forfait',
  templateUrl: './list-forfait.component.html',
  styleUrls: ['./list-forfait.component.css','./../../../assets/css/titre.css','./../../../assets/css/price.css']
})
export class ListForfaitComponent implements OnInit {

  @Output()  clickReloadData = new EventEmitter();
  @Input() idOffre :string;
  
  forfaits : any;
  offre : any;

  constructor(private forfait_service : ForfaitService,private offre_service : OffreService
    ,private telma_service : TelmaService,private router : Router) { }

  ngOnInit(): void {
    this.getAllForfaits();
  }

  getAllForfaits(){
    const success = data =>{
      if(data.status == 200){
        this.forfaits = data.data;
        this.getOffre();
      }
   }

    const error = data =>{
    }

    this.forfait_service.getAllForfaits(this.idOffre).subscribe(success,error);
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

  supprimerForfait(idForfait : any){
    const success = data =>{
      if(data.status == 200){
        console.log(data.message);
        this.clickReloadData.emit();
      }
      this.telma_service.redirect(data,401,"/",this.router);
   }

    const error = data =>{
      this.telma_service.redirect(data,401,"/",this.router);
    }
    this.forfait_service.supprimerForfait(idForfait).subscribe(success,error);
  }

  
}
