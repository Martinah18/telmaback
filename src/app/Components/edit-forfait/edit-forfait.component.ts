import { TelmaService } from './../../Service/telma/telma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ForfaitService } from '../../Service/forfait/forfait.service';

@Component({
  selector: 'app-edit-forfait',
  templateUrl: './edit-forfait.component.html',
  styleUrls: ['./edit-forfait.component.css','./../../../assets/css/telma.css','./../../../assets/css/titre.css']
})
export class EditForfaitComponent implements OnInit {

  form : FormGroup;
  reponse : any = [];
  message: any;
  forfait: any;
  idForfait : any;
  idOffre : any;

  forfaitConfig : any[] = [
    {"idData" :0,"nomData" :"nomforfait","type":"text"},
    {"idData" :1,"nomData" :"prix","type":"number"},
    {"idData" :2,"nomData" :"validite","type":"number"},
    {"idData" :3,"nomData" :"code","type":"text"},
    {"idData" :9,"nomData" :"description","type":"textArea"},
  ];


  constructor(private forfait_service : ForfaitService,private router : Router,
    private route : ActivatedRoute , private telma_service : TelmaService) { 
   
  }

  ngOnInit(): void {
    this.idForfait = this.route.snapshot.paramMap.get('idForfait');
    this.idOffre = this.route.snapshot.paramMap.get('id');
   this. getForfaitById();
  }

  toFormGroup() {
    const group: any = {};
    this.forfaitConfig.forEach(data => {
      group[data.nomData] = new FormControl(this.forfait[data.nomData]);
    });
    this.forfait.datas.forEach(data => {
      group[data.nomData] = new FormControl(data.quantite);
    });
    this.form = new FormGroup(group);
  }



  fillFromForm() : void {
    let datas = this.forfait.datas;
    this.forfaitConfig.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
    datas.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
  }


  getForfaitById(){
    const success = data =>{
         if(data.status == 200){
           this.forfait = data.data;
           this.toFormGroup();
         }
         this.message = data.message;
         this.telma_service.redirect(data,401,"/",this.router);
      }
      const error = data =>{
           this.message = data.error.message;
           this.telma_service.redirect(data,401,"/",this.router);
        }
      this.forfait_service.getForfaitById(this.idForfait).subscribe(success,error);
    }
 
    modifierForfait(){
      const success = data =>{
        if(data.status == 200){
          this.message = data.message;
          this.router.navigate(['offre/'+this.idOffre]);
        }
        this.telma_service.redirect(data,401,"/",this.router);
      }
      const error = data =>{
         this.message = data.error.message;
         this.telma_service.redirect(data,401,"/",this.router);
      }
      this.fillFromForm();
      this.forfait_service.modifierForfait(this.idForfait,this.forfaitConfig,this.forfait.datas,this.reponse)
      .subscribe(success,error); 
    }
}
