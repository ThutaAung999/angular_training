import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.scss']
})
export class TemplateDrivenFormExampleComponent {

  user = {
    firstName: 'John',
    password:  'test'
  };

  onSubmitTemplateBased(formValue:any) {

    console.log("Form Submit",formValue);
    console.log("Component user : ", this.user)
  }
}
