import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  constructor(private http: HttpClient) { }

  voteForCats(){
    console.log('voted cats');
    return this.http.get("http://localhost:8080/cats");
  }

  voteForDogs(){
    console.log('voted dogs');
    return this.http.get("http://localhost:8080/dogs");
  }

}
