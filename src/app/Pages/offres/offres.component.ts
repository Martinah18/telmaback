import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css','./../../../assets/css/telma.css']
})
export class OffresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     
  }

  reloadData(){
    location.reload();
  }


}
