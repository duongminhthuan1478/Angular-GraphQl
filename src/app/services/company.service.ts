import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { JobQuery } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private apollo: Apollo) {

  }


  getCompanyDetail(companyId: string): Observable<ApolloQueryResult<JobQuery>> {
    const GET_COMPANY_DETAIL_QUERY = gql`
      query CompanyDetailQuery($id: ID!) {
        company(id: $id) {
          id
          name
          description
          jobs {
            id
            title
          }
        }
      }`;
    return this.apollo.watchQuery<JobQuery>({
      query: GET_COMPANY_DETAIL_QUERY,
      variables: {
        id: companyId,
      },
    }).valueChanges;
  }
}
