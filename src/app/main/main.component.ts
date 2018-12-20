import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  response: any;

  catVotes: any;
  dogVotes: any;

  constructor(private votingService: VotingService) { }

  ngOnInit() {
    this.getResults();
  }

  voteCats() {
    this.votingService.voteForCats()
      .subscribe(data => this.response = data);

    setInterval(a=>{
      this.getResults();
    },300,[]);
  }

  voteDogs() {
    this.votingService.voteForDogs()
      .subscribe(data => this.response = data);

    setInterval(a=>{
      this.getResults();
    },300,[]);
  }

  getResults(){
    this.votingService.getDogResults()  
      .subscribe(data => this.dogVotes = data);
    this.votingService.getCatResults()  
      .subscribe(data => this.catVotes = data);
  }

}
