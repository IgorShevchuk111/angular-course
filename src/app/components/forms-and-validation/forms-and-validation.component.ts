import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/my.validators';

@Component({
  selector: 'app-forms-and-validation',
  templateUrl: './forms-and-validation.component.html',
  styleUrls: ['./forms-and-validation.component.scss']
})
export class FormsAndValidationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  // FORM {}
  form: FormGroup

  constructor() { }

  // FORM GROUP
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
         Validators.email,
         MyValidators.restrictedEmail,
        ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address: new FormGroup({
        country: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required])
      }),
      skills: new FormArray([])
    })
  }
  // SHOW ERROR EMAIL
  getErrorMessageEmail() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a email';
    } else if (this.form.get('email')?.hasError('restrictedEmail')){
      return `This email ${this.form.get('email')?.value } restricted`;
    }else if (this.form.get('email')?.hasError('uniqEmail')){
      return `${this.form.get('email')?.value } This email is in use`;
    }
    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }
  // SHOW ERROR PASSWORD
  getErrorMessagePassword() {
    if (this.form.get('password')?.hasError('required')) {
      return 'You must enter a password';
    } else  if( this.form.get('password')?.hasError('minlength') ){
      return `min length ${this.form.get('password')?.getError('minlength').requiredLength}, 
      actualLength ${this.form.get('password')?.getError('minlength').actualLength}`
    }
    return null
  }
  // Choose Capital
  ChooseCapital() {
    const cityMap = {
      ua: 'Kyiv',
      uk: 'London',
      pl: 'Warsaw'
    }
    const cityKey = (this.form.get('address') as FormGroup).get('country')?.value
    const city = cityMap[cityKey as keyof typeof cityMap];
    (this.form.get('address') as FormGroup).get('city')?.patchValue(city)
  }
  // ADD SKILLS
  addSkills() {
    const skill = new FormControl('', [Validators.required]);
    (this.form.get('skills') as FormArray).push(skill)
  }
  // GET  CONTROLS (SKILLS ARRAY)
  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
  // SUBMIT BUTTON
  submit():void {

    if (this.form.valid) {
      console.log('submited', this.form);
     this.formDirective.resetForm()
    } 
  }
}
