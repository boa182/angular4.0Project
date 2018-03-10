import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {CommonService}  from '../../utils/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
   
    sex:string='男';
    nickName:string='???';
    imgUrl:string;
    user:string;
  constructor(private httpservice:HttpService, private common:CommonService,private router: Router,private activatedRoute: ActivatedRoute) {
      
   }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(queryParams => {  
        let user = queryParams.user;  
        let imgurl = queryParams.imgurl;
        let nickName = queryParams.nickName; 
        this.user=decodeURI(user);
        this.imgUrl=decodeURI(imgurl);
        this.nickName=decodeURI(nickName);
        console.log(this);

    });  
  }
  sendData(){
    console.log(666);
    //格式化表单
    var formdData= new FormData();
    var img=document.getElementById('file');
    var nickName=$('#nickName').val();
    console.log(img.files[0]);
    formdData.append("img",img.files[0]);
    console.log(this.user);
    formdData.append("user",this.user);
    formdData.append("nickName",nickName);
    formdData.append("sex",this.sex);
    this.httpservice.postimg('upload',formdData).then((res)=>{
        console.log(res);
        if(res['ok']){
            alert('success');
            //重新发起请求
            this.router.navigate(['/home']);

        }
    })
  }
  cancel(){
        this.router.navigate(['/home/statistics']);
  }
}
