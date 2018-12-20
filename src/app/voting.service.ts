import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor(private http: HttpClient) { }

  votingApiUrl = "http://localhost:8080";
  resultsApiUrl = "http://localhost:3000";


  voteForCats(){
    console.log('voted cats');
    return this.http.get(this.votingApiUrl + "/cats");
  }

  voteForDogs(){
    console.log('voted dogs');
    return this.http.get(this.votingApiUrl + "/dogs");
  }

  getCatResults(){
    return this.http.get(this.resultsApiUrl + "/catresults");
  }

  getDogResults(){
    return this.http.get(this.resultsApiUrl + "/dogresults");
  }
}
