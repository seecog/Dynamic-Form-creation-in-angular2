import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-dform1',
  templateUrl: './dform1.component.html',
  styleUrls: ['./dform1.component.css']
})
export class Dform1Component implements OnInit {
private myForm : FormGroup; 
  constructor(private fBuilder : FormBuilder ) { }

  ngOnInit() {
    this.myForm = this.fBuilder.group({
      first_name : ['',[Validators.required,Validators.minLength(5)]]
    })
  }

}
