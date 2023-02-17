import { CreateJob } from './../../models/job';
import { Router } from '@angular/router';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobComponent } from '../create-job/create-job.component';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit {

  public jobs!: Job[];

  constructor(
    private _job: JobService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getJobsData();
  }

  goToDetail(jobId: string) {
    this.router.navigate([`jobs/detail/${jobId}`]);
  }

  deleteJob(jobId: string) {
    event?.stopPropagation();
    this._job.deleteJob(jobId).subscribe(res => {
      this.getJobsData();
    });
  }

  updateJob(job: Job) {
    event?.stopPropagation();
    console.log("job", job);
    this.openModal(job);
  }

  private getJobsData() {
    this._job.getJobs().subscribe(response => {
      this.jobs = response.data.jobs as Job[];
      console.log("jobs", this.jobs);
    })
  }

  openModal(job?: Job) {
    const dialogRef = this.dialog.open(CreateJobComponent, {
      width: '30%',
      data: job
    });

    dialogRef.afterClosed().subscribe(data => {
      if (!data?.title) return;

      let payload: any;

      if (job) {
        payload = ({ ...data, companyId: data.company.id });
        delete payload.company;
        delete payload.__typename;
        this._job.updateJob(payload).subscribe(reuslt => {
          console.log("update ok");
          this.getJobsData();
        });
        return;
      }
      payload = { ...data, companyId: "fake-company-id" };
      this._job.createJob(payload).subscribe(reuslt => {
        console.log("create ok");
        this.getJobsData();
      });
    });
  }


}
