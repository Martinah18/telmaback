import { ListTarifComponent } from './../../Components/list-tarif/list-tarif.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css','./../../../assets/css/telma.css']
})
export class DatasComponent implements OnInit {

  @ViewChild(ListTarifComponent) child : any;
  idTarif : any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  reloadData(){
    location.reload();
  }

  reloadTarifData(){
    this.child.reload();
  }


  showModif($event){
    this.idTarif = $event;
  }

}


