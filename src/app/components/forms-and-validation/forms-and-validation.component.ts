import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-and-validation',
  templateUrl: './forms-and-validation.component.html',
  styleUrls: ['./forms-and-validation.component.scss']
})
export class FormsAndValidationComponent implements OnInit {

  obj = {
    a:1,
    b:{
      c:2,
      d:3,
      e:4
    }
  }

submit() {
  console.log('submited',this.form);
}

  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

 
      

  getErrorMessageEmail() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a email';
    }
    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.form.get('password')?.hasError('required')) {
      return 'You must enter a password';
    }
    return this.form.get('password')?.hasError('minlength') ? 'fdf' : '';
  }

}
