import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	var username = sessionStorage.getItem("username");
	if(username == undefined){
		console.log('username is undefined')
	}else{
		document.getElementsByTagName('p')[0].innerHTML = '<span>'+username+'</span>';
	}
  }

  login(){
    
  }

  register(){

  }
}
