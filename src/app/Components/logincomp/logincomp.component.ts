import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../Service/admin/admin.service';
import { TelmaService } from '../../Service/telma/telma.service';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css','./../../../assets/css/alert.css','./../../../assets/css/login.css']
})
export class LogincompComponent implements OnInit {
  form : FormGroup;
  private _email: any = "";
  private _mdp: any = "";
  message : string = " Ensemble pour construire l'avenir";
  
  constructor( private builder : FormBuilder,private router: Router,
    private admin_service : AdminService, private telma_service : TelmaService) { 
    this.form = this.builder.group({
      email : new FormControl('zotoavina@gmail.com',[Validators.required,Validators.email]),
      mdp :new FormControl('123456',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  public get email(): any {
    return  this.form.get("email");
  }
  public set email(value: any) {
    this._email = value;
  }

  public get mdp(): any {
    return  this.form.get("mdp");
  }
  public set mdp(value: any) {
    this._mdp = value;
  }
  
  fillFromForm() : void {
    this.email = this.form.get("email")?.value;
    this.mdp = this.form.get("mdp")?.value;
  }

  login(){
      const success = data =>{
        if(data.status == 200){
          this.telma_service.setTokenValue(data.data);
          this.router.navigate(['/offre']);
          this.message = data.message;
        }
       }

      const error = data =>{
        if(data.status == 0){
          this.message = "erreur interne du serveur";
        }
      }
      this.fillFromForm();
      this.admin_service.login(this._email, this._mdp).subscribe(
        success, error
      );
  }

}
