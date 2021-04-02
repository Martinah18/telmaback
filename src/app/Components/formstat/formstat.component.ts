import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formstat',
  templateUrl: './formstat.component.html',
  styleUrls: ['./formstat.component.css','./../../../assets/css/telma.css','./../../../assets/css/stat.css']
})
export class FormstatComponent implements OnInit {

  @Output()  clickVoir = new EventEmitter<any>();
  @Input() types : any= [];
  @Input() month : any;
  @Input() dataConfig :any= [];
  
  form : FormGroup;
  moisConfig : any = [
    {"id":1,"nom":"Janvier" },{"id":2,"nom":"Fevrier" },{"id":3,"nom":"Mars" },{"id":4,"nom":"Avril" },
    {"id":5,"nom":"Mai" },{"id":6,"nom":"Juin" },{"id":7,"nom":"Juillet" },{"id":8,"nom":"Aout" },
    {"id":9,"nom":"Septembre" },{"id":10,"nom":"Octobre" },{"id":11,"nom":"Novembre" },{"id":12,"nom":"Decembre" }
  ]
  reponse = [];
  
  constructor() {
  }

  ngOnInit(){
    this.toFormGroup();
    console.log(this.dataConfig);
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
      this.reponse[data.nom] = this.form.get(data.nom)?.value;
    });
    console.log(this.reponse);
  }

  voirStat(){
    this.fillFromForm();
    this.clickVoir.emit(this.reponse);
  }

}
