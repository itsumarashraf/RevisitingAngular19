import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  formBuilder = inject(FormBuilder)
  name = new FormControl('')

  updateValue(){
    this.name.setValue('umar')
  }

  //form group
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  submitProfileInfo(){
    console.log(this.profileForm.value)
  }

  //form using formBuilder

  employeeForm = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  })

  submitEmployeeForm(){
    console.log(this.employeeForm.value)
  }

  //Creating dynamic forms using formArray

  dynamicProfileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    skills: this.formBuilder.array([this.formBuilder.control('')])
  })

  get skills(){
    return this.dynamicProfileForm.get('skills') as FormArray;
  }

  addSkills(){
    this.skills.push(this.formBuilder.control(''))
  }

  submitDynamicForm(){
    console.log(this.dynamicProfileForm.value)
  }
}


