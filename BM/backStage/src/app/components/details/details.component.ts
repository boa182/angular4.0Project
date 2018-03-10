import { Component, OnInit, Input,OnChanges, EventEmitter, Output} from '@angular/core';
import {HttpService} from '../../utils/http.service'
import {CommonService}  from '../../utils/common.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {
    @Input() gid: number;
    @Input() api: string;
    @Output() hadchanged = new EventEmitter<Object>();
    columns : Array<string>;
    colsAttributes: Object = {};
    //scolsAttributes:Array<string>;
    privateDic: Object = {};
    searchapi:string;
    dataset :Array<Object>=[];
    filterColumns: Array<string> = null;
    changeData:Object={};
    updateapi:string;
    constructor(private http: HttpService, private common: CommonService) { }
  

  ngOnChanges() {
        console.log(this.gid,'gid');
        this.http.get(this.api).then((ConfigRes)=>{
            console.log(ConfigRes,'gooddetails');
            let cols = ConfigRes['cols'];
            this.columns = !cols || cols == '*' ? [] : cols.split(',');
            this.colsAttributes = ConfigRes['colsAttributes'] || {};
            this.searchapi=ConfigRes['searchapi'];
          let filterCols = ConfigRes['filterCols'];
          this.filterColumns = !filterCols ? [] : filterCols.split(',');
         this.updateapi=ConfigRes['updateapi'];
        })
        if(this.gid){
            this.http.get(this.searchapi,{"gid":this.gid}).then((res)=>{
                console.log('goosdetails',res);
                res=JSON.parse(JSON.stringify(res));
                this.dataset=res;
                console.log(this.dataset);
            })
        }
  }
  ngOnInit(){}
   getKeys(item){
        return Object.keys(item);
    }
    getchange(key,e){
        console.log(key,e.target.value);
        this.changeData[key]=e.target.value;
        console.log(this.changeData);
    }

    saveChange(){
         //将改变的数据传递给父组件
         console.log(666);
         let params={};
         params['api']=this.updateapi;
         params['data']=this.changeData;
         params['id']=this.gid;
         this.hadchanged.emit(params);
     }
}
