import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormArray} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-dform2',
  templateUrl: './dform2.component.html',
  styleUrls: ['./dform2.component.css']
})
export class Dform2Component implements OnInit {
private docForm : FormGroup;
private patients : any[];
  constructor(private fBuilder : FormBuilder) { }

  ngOnInit() {
this.docForm=this.fBuilder.group({
  doc_name : [''],
  doc_age : [''],
  doc_speciality : [''],
  patients : this.fBuilder.array([this.createPatientForm()])
})
  }

  createPatientForm(){
    return this.fBuilder.group({
      patient_name : [''],
      patient_disease : ['']
    })
  }

  addPatientForm(){
    let patients = this.docForm.get('patients') as FormArray;
    patients.push(this.createPatientForm())
  }
  deleteForm(i){
    let patients = this.docForm.get('patients') as FormArray;
    patients.removeAt(i);
  }

  saveDoctor(){
    console.log('The doc data is ',this.docForm.value)
  }

}
