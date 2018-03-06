import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {
    dataset: Array<any> = null;

    constructor(private httpservice:HttpService){}

    ngOnInit() {
        this.httpservice.get('getuser').then((res) => {
            this.dataset = res;
            console.log(this.dataset)
        })
    }
    getkeys(item){
        return Object.keys(item)
    }
    deleteUser(id){
        console.log(id)
    }
    redact(){
        console.log(666)
    }
}
