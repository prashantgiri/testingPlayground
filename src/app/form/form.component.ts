import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form:any;
  submitted = false;

  constructor(private fb :FormBuilder){
    this.form = this.fb.group({
      username: ['', Validators.required],
      email : ['', [Validators.required, Validators.email]]
    })
  }

  submit(){
    this.submitted= true;
    console.log(this.form.value);
  }
}
