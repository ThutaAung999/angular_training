import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent {

  firstNameInUpperCase :string=''

  /*loginForm = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });*/


  loginForm :FormGroup;

  constructor(fb:FormBuilder) {

    this.loginForm=  fb.group({
      "firstName": ["", Validators.required],
      "password":["", Validators.required]
    });


    this.loginForm.valueChanges
      .pipe(
        map((value) => {
          value.firstName = value.firstName?value.firstName.toUpperCase():'empty';
          this.firstNameInUpperCase=value.firstName;
          return value;

        }),
        filter((value) => this.loginForm.valid)
      )
      .subscribe((value) => {
        console.log("Reactive Form valid value: vm = ",
          JSON.stringify(value));
      });
  }


  fullUpdate() {
    this.loginForm.setValue({firstName: 'Partial', password: 'monkey'});
  }

  partialUpdate() {
    this.loginForm.patchValue({firstName: 'Partial'});
  }


  reset() {
    this.loginForm.reset();
  }


  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.loginForm.value);

  }
}
