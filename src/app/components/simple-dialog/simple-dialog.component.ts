import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-simple-dialog',
  imports: [MatDialogModule],
  templateUrl: './simple-dialog.component.html',
  styleUrl: './simple-dialog.component.scss'
})
export class SimpleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>) { }
    
    close(): void {
      this.dialogRef.close();
    }
}
