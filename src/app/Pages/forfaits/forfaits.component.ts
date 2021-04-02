import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.css','./../../../assets/css/titre.css','./../../../assets/css/telma.css']
})

export class ForfaitsComponent implements OnInit {

  idOffre : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
     this.idOffre = this.route.snapshot.paramMap.get('id');
  }

  reloadData(){
    location.reload();
  }

}
