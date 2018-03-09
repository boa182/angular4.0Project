import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {CommonService}  from '../../utils/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
    sex:string='男';
  constructor(private httpservice:HttpService, private common:CommonService,private router: Router) { }

  ngOnInit() {
  }
  sendData(){
    console.log(666);
    //格式化表单
    var formdData= new FormData();
    var img=document.getElementById('file');
    var nickName=$('#nickName').val();
    console.log(img.files[0]);
    formdData.append("img",img.files[0]);
    //console.log(formdData);
    //console.log(this.common['currentUser']);
    formdData.append("user",this.common['currentUser']);
    formdData.append("nickName",nickName);
    formdData.append("sex",this.sex);
    this.httpservice.postimg('upload',formdData).then((res)=>{
        console.log(res);
        if(res.ok){
            alert('success');
            this.router.navigate(['/home/statistics']);

        }
    })
  }
  cancel(){
        this.router.navigate(['/home/statistics']);
  }
}
