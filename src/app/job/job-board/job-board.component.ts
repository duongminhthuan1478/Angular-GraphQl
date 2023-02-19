import { CreateJob } from './../../models/job';
import { Router } from '@angular/router';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobComponent } from '../create-job/create-job.component';
import { environment } from 'src/environments/environment';

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
    this.openModal(job);
  }

  private getJobsData() {
    this._job.getJobs().subscribe(response => {
      console.log("get-all-response", response);
      if(response.loading) return;
      this.jobs = response.data.jobs as Job[];
    
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
        });
        return;
      }

      const userLoggedFake = environment.userLoggedFake;
      payload = { ...data, companyId: userLoggedFake.companyId };
      delete payload.id;
      delete payload.company;
      this._job.createJob(payload).subscribe(reuslt => {
        console.log("create ok");
        // we can using write query to cache again if don't want to reload
        // https://the-guild.dev/graphql/apollo-angular/docs/caching/interaction
        this.getJobsData();
      });
    });
  }


}
