import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Component({
  selector: 'app-addgoods',
  templateUrl: './addgoods.component.html',
  styleUrls: ['./addgoods.component.css']
})
export class AddgoodsComponent implements OnInit {

  constructor(private httpservice:HttpService) { }

  ngOnInit() {
  }

}
