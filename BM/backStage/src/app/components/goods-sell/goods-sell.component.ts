import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-sell',
  templateUrl: './goods-sell.component.html',
  styleUrls: ['./goods-sell.component.css']
})
export class GoodsSellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var myChart = echarts.init(document.getElementById('GoodsSell'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '奢步仕近一周销售'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }

}
