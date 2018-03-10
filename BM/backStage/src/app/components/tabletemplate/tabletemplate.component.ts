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
    searchapi:string;
    searchParams:Object={};
    currentGood:number;
    editData:Object;
    deleteConfig:Object = {};
    

    @Input() config: string;

    constructor(private httpservice:HttpService,  private common: CommonService){}

     ngOnInit(){
        this.user = sessionStorage.getItem('userName');
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

            this.searchapi = configRes['searchapi'];

            this.deleteConfig = configRes['delete'];


            this.apiRequest();
        })
    }

    apiRequest(_page = 1){
        let pageParams = {};

        if(this.paginationConfig){
           
            this.searchParams['pageitems'] = this.paginationConfig['pageitems'];
            this.searchParams['page'] = _page;
        }       

        //配置信息中的 api
        this.httpservice.get(this.apiConfig, this.searchParams).then((apiRes) => {
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
     //当前页数小于保留的页码数,全部显示
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
        //根据当前页重新设置页码
        this.lastPage = this.pageCount;
         if (page >= this.pageNum) {
            //如果当前页大于页码数,页码显示第一页为页码数的一半
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

    selectTr(_idx,e){
        console.log(e.target.tagName);
        if(e.target.tagName=='BUTTON'){

        }else{        
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
        console.log(this.currentTrIndexs);
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
    //搜索
    getSearchData(obj){
          console.log(obj,'111');
         //加上分页
         if(obj.searchapi){
             this.apiConfig=obj.searchapi;
         }
         if(obj['data']){

            this.searchParams=obj['data'];
         }
        console.log(this.searchParams);
        this.apiRequest();
          
      }

    todetails(_id){
        //console.log(_id);
        console.log(this.common['userType']);
        if(this.common['userType']==0){
            alert(' without permissions');
        }else{      
            this.currentGood=_id;      
            $('#exampleModal').modal({
                show:true,
                keyboard: true
            });
        }
       
    }
    getchanged(e){
        console.log(e);
        $('#exampleModal').hide();
        let params={};
        params['gid']=e.id;
        params['data']=JSON.stringify(e.data);

        console.log(params['data']=='{}');
        if(params['data']=='{}'){

        }else{
            this.httpservice.post(e.api,params).then((res)=>{
                console.log(res);
                if(res.ok){
                    this.apiRequest();
                    alert('success');
                }else{
                    alert('faile');
                }
            })
        }
    }
    
    deleteTr(key,idx){
        //权限为1的才能操作
        if(this.common['userType']!=1){
            alert(' without permissions');
        }else{        
            //删除当前商品
            var res=confirm('Delete this good?'));
            console.log(res);
            if(res){
                this.httpservice.post(this.deleteConfig['api'],{gid:key}).then((result)=>{
                    console.log(result);
                    if(result.ok){
                        this.dataset.splice(idx,1);
                        this.apiRequest(this.page);
                    }
                }) 
            }
        }
    }
   
    deleteBatches(){
        if(this.common['userType']!=1){
            alert(' without permissions');
        }else{
            //批量删除
            if(this.currentTrIndexs.length>0){   
                var str="";
                for(let i=0;i<this.currentTrIndexs.length;i++){
                    console.log(this.dataset[this.currentTrIndexs[i]].gid);
                    str+=(this.dataset[this.currentTrIndexs[i]].gid)+",";
                }
                str=str.substr(0,str.length-1);
                console.log(str);
                console.log(this.deleteConfig['batchapi']);
            this.httpservice.post(this.deleteConfig['batchapi'],{gid:str}).then((res)=>{
                    console.log(res);
                    if(res['ok']){
                        this.apiRequest(this.page);
                        alert('success');
                    }
                })
            }
        }

    }
 
}




