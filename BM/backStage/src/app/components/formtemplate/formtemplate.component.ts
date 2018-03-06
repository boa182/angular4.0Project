import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from '../../utils/http.service'
import {CommonService}  from '../../utils/common.service'

@Component({
  selector: 'formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {
    @Input() api: string;
    @Output() parentAttr = new EventEmitter<object>();
    colsConfig: Array<string> = [];
    privateDic: Object = {};
    colsAttributes: Object = {};
    selectApiDataSet: Object = {};
    searchData:object={};

    constructor(private http: HttpService, private common: CommonService) { }

    ngOnInit() {
        this.http.get(this.api).then((configRes) => {
            console.log(configRes);
            this.colsConfig = configRes['cols'].split(',');
            this.colsAttributes = configRes['colsAttributes'] || {};

            for(let item in this.colsAttributes){
                if(this.colsAttributes[item]['type'] == 'select-api'){
                    //api = students?pageitems=5&page=1
                    let _api = this.colsAttributes[item]['api'];
                    this.http.get(_api).then((res) => {
                        //{"colsAttributes": []}
                        console.log(res);
                        this.selectApiDataSet[item] = res;
                    })
                }
            }
        })
    }
    changeval(key,e){
        console.log(e.target.value);
        this.searchData[key]=e.target.value;
        console.log(this.searchData);
    }
    reset(){
        for(let key in this.searchData){
            console.log(key);
            this.searchData[key]="";
        }
        console.log(this.searchData);
    }
    tosearch(){
        //把参数传递给父组件
        this.parentAttr.emit(this.searchData);
    }
}

