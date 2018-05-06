import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
private frm : FormGroup;
private patients : FormArray;
  constructor(private formB : FormBuilder) {
  }

  ngOnInit() {
this.frm=this.formB.group({
  first_name : ['',[Validators.required,Validators.minLength(5)]],
  speciality : [''],
 patients : this.formB.array([this.createForm()])
})
  }

  saveDoc(){
    console.log(this.frm.value)
  }

  createForm(){
    return this.formB.group({
      pname : [''],
      disease : ['']
    })
  }

  addPatient(){
    var items = this.frm.get("patients") as FormArray;
    items.push(this.createForm());
  }

}
