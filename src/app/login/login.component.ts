import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user : any={};
  constructor(private x : Http) { }

  ngOnInit() {
  }

  checkLogin(){
console.log('The login s ',this.user)
this.x.post('localhost:3002/api/login',this.user).subscribe(
(res )=>{
console.log("response is ",res)
},
(error)=>{
  console.log('Error is ',error)
}

)
  }

}
