import { Component, inject, NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCard} from '@angular/material/card'
import { DialogRef } from '@angular/cdk/dialog';




@Component({
  selector: 'app-dialog-example',
  standalone: true, 
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatCard],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.scss'
})
export class DialogExampleComponent {

  dialogRef = inject(MatDialog)

  firstName: string ='Jhon';
  lastName: string ='Doe';

  dialogForm(){
    //opening dialog and passing data to it
    const dialogForm = this.dialogRef.open(DialogWithForm, {
      width: '250px',
      data: { firstName: this.firstName, lastName: this.lastName }
      });

      dialogForm.afterClosed().subscribe(r=> {
        this.firstName=r.firstName;
         this.lastName=r.lastName;
        })

  }
}


export interface DialogData {
  firstName: string;
  lastName: string;
 }

//Actual dialog
@Component({
  selector:'dialog-with-form',
  standalone: true, 
  imports:[MatButtonModule,FormsModule,MatFormFieldModule,MatButtonModule,MatInputModule, MatDialogModule,FormsModule],
  template:`
        <h1 mat-dialog-title>
          Fill Basic Details
        </h1>
        <div mat-dialog-content>
          <mat-form-field>
            <input placeholder="First Name" matInput [(ngModel)]="data.firstName">
            </mat-form-field><br>
          <mat-form-field>
            <input placeholder="Last Name" matInput [(ngModel)]="data.lastName">
          </mat-form-field>
          </div>
          <div mat-dialog-actions>
            <button mat-button [mat-dialog-close]="data">Submit</button>
            <button mat-button (click)="onNoClick()">Close</button>
        </div>
 `,
  styles:``
})
class DialogWithForm{
 
  public dialogRef = inject(MatDialogRef<DialogWithForm>);
  private dialogData = inject(MAT_DIALOG_DATA)
  
  public data:DialogData = this.dialogData;

  //mat-dialog-close: is a directive with passes data back to the parent when closed


  onNoClick():void{
    console.log(this.data)
    this.dialogRef.close()  
  }

}
