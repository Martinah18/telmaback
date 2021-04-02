import { Router } from '@angular/router';
import { TelmaService } from './../../Service/telma/telma.service';
import { OffreService } from './../../Service/offre/offre.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css','./../../../assets/css/tableSort.css','./../../../assets/css/titre.css']
})
export class ListOffreComponent implements OnInit {

  @Output()  clickReloadData = new EventEmitter();
  public offres: [];
  
  constructor(private offre_service : OffreService, private telma_service : TelmaService, private router : Router) { }

  ngOnInit(): void {
     this.getAllOffres();
  }

  getAllOffres(){
    const success = data =>{
      if(data.data !== null){
        this.offres = data.data;
      }
   }

    const error = data =>{
    }
    this.offre_service.getAllOffres().subscribe(success,error);
  }

  supprimerOffre(idOffre : any){
    const success = data =>{
      if(data.status == 200){
        this.clickReloadData.emit();
      }
      this.telma_service.redirect(data,401,"/",this.router);
   }

    const error = data =>{
      this.telma_service.redirect(data,401,"/",this.router);
    }
    this.offre_service.supprimerOffre(idOffre).subscribe(success,error);
  }

}
