import { TarifdataService } from './../../Service/tarifdata/tarifdata.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TelmaService } from '../../Service/telma/telma.service';

@Component({
  selector: 'app-edit-tarif',
  templateUrl: './edit-tarif.component.html',
  styleUrls: ['./edit-tarif.component.css','./../../../assets/css/telma.css','./../../../assets/css/formAnim.css']
})
export class EditTarifComponent implements OnInit {

  @Output()  reloadTarif = new EventEmitter();
  @Input() idTarif: any;
 
  form : FormGroup;
  tarif : any;
  reponse : any = {};
  tarifConfig : any[] = [
    {"nomData" :"interne"},
    {"nomData" :"autres"},
    {"nomData" :"international"},
  ];
  message :string = "Modifier le tarifs";

  constructor(private tarifdata_service :  TarifdataService,private router : Router,
    private route : ActivatedRoute , private telma_service : TelmaService) { 
   
  }
  

  ngOnInit(): void {
    
      this. getTarifById();
  }

  toFormGroup() {
    const group: any = {};
    this.tarifConfig.forEach(data => {
      group[data.nomData] = new FormControl(this.tarif[data.nomData]);
    });
    this.form = new FormGroup(group);
  }

  ngOnChanges() {
    this. getTarifById();
  }


  fillFromForm() : void {
    this.tarifConfig.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
  }


  getTarifById(){
    const success = data =>{
         console.log(data);
         if(data.data != null){
           this.tarif = data.data;
           this.message = data.meassage;
           this.toFormGroup();
         }
         this.telma_service.redirect(data,401,"/",this.router);
      }
      const error = data =>{
        this.message = data.error.message;
           this.telma_service.redirect(data,401,"/",this.router);
        }
      this.tarifdata_service.getTarifById(this.idTarif).subscribe(success,error);
  }

  modifierTarif(){
    const success = data =>{
        this.reloadTarif.emit();
      this.telma_service.redirect(data,401,"/",this.router);
   }
   const error = data =>{
     this.message = data.error.message;
        this.telma_service.redirect(data,401,"/",this.router);
     }

   this.fillFromForm();
   this.tarifdata_service.modifierTarif(this.idTarif,this.tarifConfig,this.reponse).subscribe(success,error);
  }


}
