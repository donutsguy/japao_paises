import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-place-delete-confirmation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './place-delete-confirmation.component.html',
  styleUrl: './place-delete-confirmation.component.scss'
})
export class PlaceDeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<PlaceDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { placeId: number }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
