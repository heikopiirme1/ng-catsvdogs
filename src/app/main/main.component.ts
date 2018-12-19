import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  response: any;

  dogVotes= 10;
  catVotes= 10;

  constructor(private votingService: VotingService) { }

  ngOnInit() {
  }

  voteCats() {
    this.votingService.voteForCats()
      .subscribe(data => this.response = data);
  }

  voteDogs() {
    this.votingService.voteForDogs()
      .subscribe(data => this.response = data);
  }
}
