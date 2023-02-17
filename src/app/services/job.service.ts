import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CreateJob, Job, JobQuery, UpdateJob } from './../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private apollo: Apollo) {

  }

  getJobs(): Observable<ApolloQueryResult<JobQuery>> {
    return this.apollo.watchQuery<JobQuery>({
      query: gql`
        query {
          jobs {
            company {
              id
              name
            }
            description
            id
            title
          }
        }
      `,
    }).valueChanges;
  };

  getJobDetail(jobId: string): Observable<ApolloQueryResult<{ job: Job }>> {
    const GET_JOB_DETAIL_QUERY = gql`
      query JobDetailQuery($id: ID!) {
        job(id: $id) {
          id
          title
          company {
            name
            id
          }
          description
        }
      }`;
    return this.apollo.watchQuery<{ job: Job }>({
      query: GET_JOB_DETAIL_QUERY,
      variables: {
        id: jobId,
      },
    }).valueChanges;
  }

  createJob(input: CreateJob) {
    const CREATE_JOB_QUERY = gql`
      mutation CreateJobQuery($input: CreateJobInput!) {
        job: createJob(input: $input) {
          id
          description
          title
          company {
            id
            description
            name
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: CREATE_JOB_QUERY,
      variables: {
        input
      },
    })
  }

  updateJob(input: UpdateJob) {
    const UPDATE_JOB_QUERY = gql`
      mutation UpdateJobQuery($input: UpdateJobInput!) {
        updateJob(input: $input) {
          title
          description
          id
          company {
            id
            name
            description
            jobs {
              id
              title
              description
            }
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: UPDATE_JOB_QUERY,
      variables: {
        input
      },
    })
  }

  deleteJob(jobId: string) {
    const CREATE_JOB_QUERY = gql`
    mutation DeleteJobQuery($id: ID!) {
      deleteJob(id: $id) {
        title
      }
    }`;
    return this.apollo.mutate({
      mutation: CREATE_JOB_QUERY,
      variables: {
        id: jobId
      }
    })
  }

}
