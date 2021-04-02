import { TarifdataService } from './../../Service/tarifdata/tarifdata.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tarif',
  templateUrl: './list-tarif.component.html',
  styleUrls: ['./list-tarif.component.css','./../../../assets/css/tableSort.css','./../../../assets/css/titre.css']
})
export class ListTarifComponent implements OnInit {

  @Output()  clickShowModif = new EventEmitter();
  public datas: [];
  
  constructor(private tarifdata_service : TarifdataService, private router : Router) { }

  ngOnInit(): void {
     this.getAllTarifs();
  }

  getAllTarifs(){
    const success = data =>{
      if(data.status == 200){
        this.datas = data.data;
      }
   }

    const error = data =>{
    }
    this.tarifdata_service.getTarifs().subscribe(success,error);
  }

  showModif(idTarif : any){
    this.clickShowModif.emit(idTarif);
  }

  reload(){
    location.reload();
  }
}
