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
    return this.http.get(this.votingApiUrl + "/cats");
  }

  voteForDogs(){
    return this.http.get(this.votingApiUrl + "/dogs");
  }
}
