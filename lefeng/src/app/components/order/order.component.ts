import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../utils/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
	Data:Array<Object>

  constructor(private http: HttpService) { }

	ngOnInit() {
		this.http.get('connetGoods',{uid:21}).then((res)=>{
			let data = JSON.parse(JSON.stringify(res));
			this.Data = data;
			console.log(this.Data)
		})
	}

}
