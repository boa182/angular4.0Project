import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../../utils/http.service'
import {CommonService}  from '../../utils/common.service'

@Component({
  selector: 'formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {
    @Input() api: string;

    colsConfig: Array<string> = [];
    privateDic: Object = {};
    colsAttributes: Object = {};
    selectApiDataSet: Object = {};

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
}

