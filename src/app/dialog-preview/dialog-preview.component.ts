import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'adh-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.css']
})
export class DialogPreviewComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      // console.log('dialog:::', data);
    }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

}
