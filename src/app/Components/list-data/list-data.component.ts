import { TarifdataService } from './../../Service/tarifdata/tarifdata.service';
import { ForfaitsComponent } from './../../Pages/forfaits/forfaits.component';
import { AdminService } from './../../Service/admin/admin.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TelmaService } from '../../Service/telma/telma.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css','./../../../assets/css/tableSort.css','./../../../assets/css/titre.css']
})
export class ListDataComponent implements OnInit {

  @Output()  clickReloadData = new EventEmitter();
  public datas: [];
  
  constructor(private forfaitdata_service: TarifdataService , private router : Router) { }

  ngOnInit(): void {
     this.getAllData();
  }

  getAllData(){
    const success = data =>{
      if(data.status == 200){
        this.datas = data.data; 
      }
   }

    const error = data =>{
    }
    this.forfaitdata_service.getData().subscribe(success,error);
  }

  supprimerData(idData : any){   
    const success = data =>{
      if(data.status == 200){
        this.datas = data.data;
        this.clickReloadData.emit();
      }
   }
    const error = data =>{
    }
    this.forfaitdata_service.supprimerData(idData).subscribe(success,error);
  }


}
