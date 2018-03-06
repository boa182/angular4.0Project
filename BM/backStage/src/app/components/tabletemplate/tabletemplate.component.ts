import {Component, OnInit, Input} from '@angular/core';
import {Utils} from '../../utils/utils';
import {CommonService} from '../../utils/common.service';
import {HttpService} from '../../utils/http.service';

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
    pagearr:Array<number>=[];
    firstPage:number=1;
    pageNum:number = 5;
    page :number= 1 ;//当前页
    lastPage:number;
    pages:Array<number>;
    editConfig:boolean;
    keyConfig:string;
    

    @Input() config: string;

    constructor(private httpservice:HttpService, private common: CommonService){}

     ngOnInit(){
        //获取当前模块的配置
        this.httpservice.get( this.config).then((configRes) => {
            console.log(configRes);
            let cols = configRes['cols'];
            this.columns = !cols || cols == '*' ? [] : cols.split(',');

            let filterCols = configRes['filterCols'];
            this.filterColumns = !filterCols ? [] : filterCols.split(',');

            this.keyConfig = configRes['key'] ? configRes['key'] : null;

            let dic = configRes['dictionary'];
            this.privateDic = dic || {};

            this.multiple = configRes['multiple'];

            this.filterDataConfig = configRes['filterData'] || {};

            this.paginationConfig = configRes['pagination'] || {};

            this.apiConfig = configRes['api'];
            
            this.searchConfig = configRes['search'] || {};

            this.editConfig = configRes['edit'];

            this.apiRequest();
            console.log('user',sessionStorage.getItem('userName'));
            
        })
    }

    apiRequest(_page = 1){
        let pageParams = {};

        if(this.paginationConfig){
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] = _page;
        }       
        console.log(pageParams); 
        //配置信息中的 api
        this.httpservice.get(this.apiConfig, pageParams).then((apiRes) => {
            console.log(apiRes);
            this.dataset = apiRes[0];
            let rowsCount = apiRes[1][0]['rowscount'];
            let pageItems = this.paginationConfig['pageitems'];
            console.log(apiRes[1][0]['rowscount']);
            console.log(pageItems,rowsCount);
            this.pageCount = Math.ceil(rowsCount / pageItems);
            if(_page==1){
                this.sub(1);
            }
            //this.setPage(this.pageCount);
        })
    }

    /*-----------------------分页--------------------*/
    setPage( num, first) {//创建保存页码数组的函数
     //length数据总条数
     //amount每页数据条数
     //num保留的页码数
     //first第一页的页码
     let pages = []; //创建分页数组
     let page = this.pageCount;
     
     if (page <= num) {
       for (let i = 1; i <= page; i++) {
         pages.push(i);
       }
     }
     if (page > num) {
       for (let i = first; i < first + num; i++) {
         pages.push(i);
       }
     }
     console.log(pages);
     return pages;
   }

   sub(page){
        this.lastPage = this.pageCount;
         if (page >= this.pageNum) {
           this.firstPage = page - Math.floor(this.pageNum / 2);
         } else {
           this.firstPage = 1;
         }
         if (this.firstPage > this.lastPage - this.pageNum) {
           this.firstPage = this.lastPage - this.pageNum + 1;
         }
         this.pages = this.setPage( this.pageNum, this.firstPage);
         this.page = page;
   }
    /*-----------------------分页--------------------*/

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

    goto(_page){
        console.log(_page);
        //let _page = event.target.value;
        this.apiRequest(_page);
    }

}




