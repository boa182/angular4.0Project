import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinpai',
  templateUrl: './pinpai.component.html',
  styleUrls: ['./pinpai.component.scss']
})
export class PinpaiComponent implements OnInit {

    goTo(location: string): void {
        window.location.hash = ''; 
        window.location.hash = location;
    }

  constructor() { }


  ngOnInit() {
  }

}
