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
      'title': ['012', [Validators.required ,  Validators.minLength(3) ,  Validators.maxLength(9) , Validators.pattern('[0-9]*')]],
      name: this.fb.group({
        'firstName': ['Wu', [Validators.required]],
        'lastName': ['Sean', Validators.required]
      }),
      'sex': ['male', [Validators.required]],
      tel: this.fb.array([
        this.fb.control('09', Validators.required),
        this.fb.control('02', Validators.required),
      ])

    });
  }

  submit(){

  }
}
