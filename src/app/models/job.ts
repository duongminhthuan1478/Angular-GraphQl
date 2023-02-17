export class JobQuery {
  jobs?: Job[];
  job?: Job;
  company?: Company;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  jobs: Job[];
}

export interface Job {
  id: string;
  title: string;
  company: Company,
  description: string,
}

export interface CreateJob {
  title: string,
  companyId: string,
  description: string
}

export interface UpdateJob {
  id: string,
  title: string,
  companyId: string,
  description: string
}
