import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../set-goal-modal/set-goal-modal.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num: string = '';

  constructor(
    public dialogRef: MatDialogRef<CalculatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Calculator Submit!');
  }

  backSpace(): void {
    console.log('BACK SPACE!');
  }

  numClick(value): void {
    console.log(`Value: ${value}`);

    this.num = this.num + String(value);

  }

  compute(): void {

  }
}
