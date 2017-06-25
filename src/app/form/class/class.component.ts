import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit() {
        this.data = {
        'firstName': '姓',
        'lastName': '名'
     };
  }

    // onSubmit(form){
  //   this.data.firstName = form.controls.firstName.value;
  //   console.log(form);

  // }

   doSubmit(form: NgForm, $event) {
      console.log(form);
      console.log($event);
      if (form.invalid) {
        alert('表單無效，請檢查欄位!');
      }
  }

}
