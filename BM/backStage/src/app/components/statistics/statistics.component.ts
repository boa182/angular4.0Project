import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  dataset: Array<any> = [];
  qty: Array<any> = [];  

  constructor(private httpservice:HttpService){}

    ngOnInit() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('staistics'));
        
        this.httpservice.get('staisticsgoods').then((res)=>{
            for(var i=0;i<res.length;i++){
                this.dataset.push(res[i].brandStoreName);
                this.qty.push(res[i].totals);
            }
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '品牌商品数量统计图'
                },
                tooltip: {},
                legend: {
                    data:['品牌']
                },
                xAxis: {
                    data: this.dataset
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: this.qty
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        })
    }

}
