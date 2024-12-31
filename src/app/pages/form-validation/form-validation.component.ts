import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  imports: [NgIf,ReactiveFormsModule,JsonPipe],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss'
})
export class FormValidationComponent {

  actorForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator('bob'), // <-- Here's how you pass in the custom validator.
    ]),
    role: new FormControl(''),
    skill: new FormControl('ee', Validators.required),
  });

get name() {
  return this.actorForm?.get('name');
}
get skill() {
  return this.actorForm?.get('skill');
}

forbiddenNameValidator(nameRe: RegExp | string) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null =>{
    const forbidden =  typeof nameRe=='string' ? nameRe === control.value : nameRe.test(control.value)
    return forbidden ?  {forbiddenName:{value:control.value}} : null
  }
}

//cross filed validator example

actor = new FormGroup({
  name: new FormControl(),
  role: new FormControl(),
  skill: new FormControl()
},{validators:this.preventNameAsRoleValidator()})

preventNameAsRoleValidator(): ValidatorFn{
  return (control:AbstractControl): ValidationErrors | null => {
    const name = control.get('name')?.value;
    const role = control.get('role')?.value;
    console.log('im in validator', name,role)
    if(name?.toLowerCase() === role?.toLowerCase()){
      return {nameRoleConflict:true}
    }else{
      return null
    }
    
  }
}

submitActorForm(){
  console.log(this.actor.status)
  console.log(this.actor.errors)
  console.log(this.actor.value)
}
}
