import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {CommonService}  from '../../utils/common.service';

@Component({
  selector: 'app-addgoods',
  templateUrl: './addgoods.component.html',
  styleUrls: ['./addgoods.component.css']
})
export class AddgoodsComponent implements OnInit {

  constructor(private httpservice:HttpService, private common:CommonService) { }

  ngOnInit() {
  }
  /*
  sendData(){
    console.log(666);
    //格式化表单
    var formdData= new FormData();
    var img=document.getElementById('file');
    console.log(img.files[0]);
    formdData.append("img",img.files[0]);
    console.log(formdData);
    console.log(this.common['currentUser']);
    formdData.append("user",this.common['currentUser']);
    this.httpservice.postimg('upload',formdData).then((res)=>{
        console.log(res);
    })
  }
  */
}
