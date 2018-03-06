import {Http} from '@angular/http';
import {Injectable} from '@angular/core'

@Injectable()
export class CommonService{
    type: string = '保湿';
	gid: string = '';
//  constructor(private http: Http){
//      http.get('http://localhost:88/config1707/dictionary.txt').subscribe((dicRes) => {
//          this.publicDic = dicRes.json();
//      })
//  }
}