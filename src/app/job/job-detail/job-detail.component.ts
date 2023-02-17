import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job!: Job;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _job: JobService
  ) { }

  ngOnInit(): void {
    const jobId = this.activateRoute.snapshot.params['jobId'];
    this.getJobDetail(jobId);
  }

  goToCompany(companyId: string) {
    this.router.navigate([`company/detail/${companyId}`]);
  }


  private getJobDetail(jobId: string) {
    this._job.getJobDetail(jobId).subscribe(response => {
      this.job = response.data.job;
    });
  }
}
