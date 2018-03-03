import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import $ from '../../utils/httpclient'
import {Utils} from '../../utils/utils'
import {CommonService} from '../../utils/common.service'

@Component({
  selector: 'tabletemplate',
  templateUrl: './tabletemplate.component.html',
  styleUrls: ['./tabletemplate.component.css']
})
export class TabletemplateComponent implements OnInit {
    dataset: Array<any> = null;
    columns: Array<string> = null;
    filterColumns: Array<string> = null;
    privateDic: Object; //私有字典
    multiple: boolean;
    currentTrIndexs: Array<number> = [];
    filterDataConfig: Object = {};
    pageCount: number = 0;
    paginationConfig: Object;
    apiConfig: string;
    searchConfig: Object = {};
    

    @Input() config: string;

    constructor(private http: Http, private common: CommonService){}

  
  ngOnInit(){
        //获取当前模块的配置
        $.get(this.http, this.config).then((configRes) => {
            let cols = configRes['cols'];
            this.columns = !cols || cols == '*' ? [] : cols.split(',');

            let filterCols = configRes['filterCols'];
            this.filterColumns = !filterCols ? [] : filterCols.split(',');

            let dic = configRes['dictionary'];
            this.privateDic = dic || {};

            this.multiple = configRes['mutipleSelect'];

            this.filterDataConfig = configRes['filterData'] || {};


            this.apiConfig = configRes['api'];
            

            this.apiRequest();

        })
    }

    apiRequest(_page = 1){
        let pageParams = {};
        if(this.paginationConfig){
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] = _page;
        }        
        //配置信息中的 api
        $.get(this.http, this.apiConfig, pageParams).then((apiRes) => {
            console.log(apiRes);
            this.dataset = apiRes['data'].result;
            //let rowsCount = apiRes['rowsCount'];
            //let pageItems = this.paginationConfig['pageitems'];
            //this.pageCount = Math.ceil(rowsCount / pageItems);
        })
    }

    getKeys(item){
        return Object.keys(item);
    }

    selectTr(_idx){
        if(this.multiple){
            if(this.currentTrIndexs.indexOf(_idx) > -1){
                this.currentTrIndexs.splice(this.currentTrIndexs.indexOf(_idx), 1);
            } else {
                this.currentTrIndexs.push(_idx);
            }
        } else {
            this.currentTrIndexs = [_idx];
        }
    }

    selectAll(){
        if(this.currentTrIndexs.length != this.dataset.length){
            this.currentTrIndexs = [];
            for(let i = 0; i < this.dataset.length; i++){
                this.currentTrIndexs.push(i);
            }
        } else {
            this.currentTrIndexs = [];
        }
    }

    filterData(_key, _val){
        let _config = this.filterDataConfig[_key];
        if(!_config){
            return _val;
        } else if(_config.type == "DateFormat"){
            return Utils.dateFormat(new Date(_val), _config.format); 
        } else if(_config.type == "Replace"){
            let reg = new RegExp(_config.reg);
            return _val.replace(reg, _config.replaceVal);
        }
    }

    goto(event){
        let _page = event.target.value;
        this.apiRequest(_page);
    }
  

}




