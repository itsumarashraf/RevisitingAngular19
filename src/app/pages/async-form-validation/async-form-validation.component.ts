import { Component, inject } from '@angular/core';
import { UniqueRoleValidator } from '../../asyncValidators/uniqueRoleValidator';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-async-form-validation',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './async-form-validation.component.html',
  styleUrl: './async-form-validation.component.scss'
})
export class AsyncFormValidationComponent {
  roleValidator = inject(UniqueRoleValidator)
  isLoading:boolean=false;
  
  constructor(){
    this.roleControl.statusChanges.subscribe(status =>{
      this.isLoading = status === 'PENDING'
    })
  }
  
  roleControl = new FormControl('', {
    asyncValidators: [this.roleValidator.validate.bind(this.roleValidator)],
    updateOn: 'blur',
  });




  handleAsyncValidation(){
    console.log(this.roleControl.value)
    console.log(this.roleControl.status)
    console.log(this.roleControl.errors)
  }
}
