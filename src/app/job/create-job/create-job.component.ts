import { Job } from 'src/app/models/job';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  public userInput: any = {
    id: null,
    title: null,
    description: null,
    company: null,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public job: Job,
    public dialogRef: MatDialogRef<CreateJobComponent>
  ) {
    if (!job) return;

    this.userInput = { ...this.job };
  }

  ngOnInit(): void { }

  save() {
    this.dialogRef.close(this.userInput);
  }


}
