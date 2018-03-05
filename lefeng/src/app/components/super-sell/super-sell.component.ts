import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';

@Component({
  selector: 'app-super-sell',
  templateUrl: './super-sell.component.html',
  styleUrls: ['./super-sell.component.scss']
})
export class SuperSellComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('selectBrand').then((res)=>{
  		console.log(res);
  	})
  }

}
