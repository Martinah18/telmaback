import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css','./../../../assets/css/stat.css','./../../../assets/css/telma.css']
})
export class StatComponent implements OnInit {

@Input() statData :any ;
@Input() chartConfig : any ;

 constructor() { }

 ngOnInit(): void {}


}
