import { TelmaService } from './../../Service/telma/telma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OffreService } from '../../Service/offre/offre.service';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css','./../../../assets/css/telma.css','./../../../assets/css/titre.css']
})
export class EditOffreComponent implements OnInit {

  
  form : FormGroup;
  idOffre : string;
  message : string;
  offre : any;

  offreConfig : any[] = [
    {"nomData" :"nomOffre","type":"text"},
    {"nomData" :"interne","type":"number"},
    {"nomData" :"autres","type":"number"},
    {"nomData" :"international","type":"number"},
    {"nomData" :"description","type":"textArea"},
  ];
  reponse : any = [];

  constructor(private builder: FormBuilder ,private route : ActivatedRoute,private router: Router,private telma_service : TelmaService, private offre_service : OffreService) { }

  ngOnInit(): void {
    this.idOffre = this.route.snapshot.paramMap.get('id');
    this.getOffreById();
  }
  
  toFormGroup() {
    const group: any = {};
    this.offreConfig.forEach(data => {
      group[data.nomData] = new FormControl(this.offre[data.nomData]);
    });
    this.form = new FormGroup(group);
  }

  
  fillFromForm() : void {
    this.offreConfig.forEach(data => {
      this.reponse[data.nomData] = this.form.get(data.nomData)?.value;
    });
  }

 getOffreById(){
    const success = data =>{
        if(data.status == 200){
          this.offre = data.data;
          this.toFormGroup();
        }
        this.message = data.message;
        this.telma_service.redirect(data,401,"/",this.router);
     }
     const error = data =>{
         this.message = data.error.message;
         this.telma_service.redirect(data,401,"/",this.router);
      }

     this.offre_service.getOffreById(this.idOffre).subscribe(success,error);
   }


  modifierOffre(){
    const success = data =>{
        if(data.status == 200)
        this.message = data.message;
        this.router.navigate(['/offre']);
      this.telma_service.redirect(data,401,"/",this.router);
    }
    const error =  data=>{
       this.message = data.message;
       this.telma_service.redirect(data,401,"/",this.router);
    }
    this.fillFromForm();
    this.offre_service.modifierOffre(this.idOffre,this.offreConfig,this.reponse)
    .subscribe(success,error); 
  }

}
