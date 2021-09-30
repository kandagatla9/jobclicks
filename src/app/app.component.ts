import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyname:string;
  requiredForm: FormGroup;
  title = 'task2';
  constructor(private fb: FormBuilder){
    this.requiredForm = fb.group({
      companyname: ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}")]],
      companyEmailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      companywebsite: ['', [Validators.required, Validators.pattern("https?://.+")]],
      aboutcompany: ['', [Validators.required, Validators.pattern("[a-zA-Z]{50,}")]],
      contactno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      industrytype: ['', [Validators.required, Validators.pattern("[a-zA-Z]{2,}")]],
      country:  ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}")]],
      state:  ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}")]],
      city:  ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}")]],
      companyaddress:  ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]{4,}")]],
      companyaddress2:  ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]{4,}")]],
      contactpersonname: ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,}")]],
     email2: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })
  }
  get m(){
    return this.requiredForm.controls;
  }
}
