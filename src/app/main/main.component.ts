import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dogVotes= 10;
  catVotes= 10;

  constructor() { }

  ngOnInit() {
  }

  voteCats() {
    this.catVotes++;
  }

  voteDogs() {
    this.dogVotes++;
  }
}
