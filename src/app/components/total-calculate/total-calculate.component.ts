import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-total-calculate',
  templateUrl: './total-calculate.component.html',
  styleUrls: ['./total-calculate.component.scss']
})
export class TotalCalculateComponent {


  totalForm : FormGroup;
   total:number = 0;

  constructor(fb: FormBuilder) {
    this.totalForm = fb.group({
      "price": [0, Validators.required],
      "quantity": [0, Validators.required],
    });

    this.totalForm.valueChanges.subscribe((value :any) => {
        this.total=value.price * value.quantity  ;
        console.log(" total :", this.total)
      });
  }

}
