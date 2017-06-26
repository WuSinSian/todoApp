import {Validators, FormGroup,  FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  data: any = {};

  form: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': ['title',Validators.required],
      name: this.fb.group({
        'fisrtName':['firstName',Validators.maxLength(3),Validators.maxLength(9)],
        'lastName':['lastName',Validators.required]
      })
    })
  }

  submit(){
 
  }
}
