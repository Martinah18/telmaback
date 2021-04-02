import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css','./../../../../assets/css/titre.css','./../../../../assets/css/telma.css','./../../../../assets/css/formAnim.css']
})
export class AddComponent implements OnInit {

  idOffre : string;
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
     this.idOffre = this.route.snapshot.paramMap.get('id');
  }

  reloadData(){
    this.router.navigate(["/offre/"+this.idOffre]);
  }
}
