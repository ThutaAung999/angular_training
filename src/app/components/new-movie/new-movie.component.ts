import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

//custom validation
export function mustStartWithCapitalLetter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value !== "" && value.length > 1) {
      if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
        return {'muststartwithcapital':{value:control.value}};
      }
    }
    return null;
  };
}


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})


export class NewMovieComponent {

  genres = ["Action", "Drama", "Horror", "Crime", "Sci-FI"];
  movieForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.movieForm = fb.group({
      "name": ["", [
                  Validators.required,
                  Validators.minLength(4),
                  Validators.pattern("^[a-z A-Z]+$"),
                  mustStartWithCapitalLetter()
                ],

      ],

      "director": ["", Validators.required],
      "year": [0, [
        Validators.required,
        Validators.pattern("^[0-9]{4}$")
      ]
      ],
      "genre": ["", Validators.required],

    });


    this.movieForm.get('name')?.valueChanges.subscribe(value=>{
      console.log("Name change : ",value)
    })

  }

  get form() {
    return this.movieForm.controls;
  }

  get name() {
    return this.movieForm.get('name')
  }

  onSubmit() {
    console.log("Movie Form : ", this.movieForm)
  }
}
