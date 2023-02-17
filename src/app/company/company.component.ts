import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/job';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  company!: Company;

  constructor(
    private activateRoute: ActivatedRoute,
    private _company: CompanyService
  ) { }

  ngOnInit(): void {
    const companyId = this.activateRoute.snapshot.params['companyId'];
    this.getJobDetail(companyId);
  }


  private getJobDetail(companyId: string) {
    this._company.getCompanyDetail(companyId).subscribe(response => {
      this.company = response.data?.company as Company;
    });
  }
}
