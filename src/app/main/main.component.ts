import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
response: any;
catVotes: Number;
dogVotes: Number;

  constructor(private votingService: VotingService, private socket: Socket) { }

  ngOnInit() {

    this.socket.on('users connected', (socketCount) => {
      console.log("Kasutajaid lehel:" + socketCount);
    })

    this.socket.on('catvotes', (catData) => {
      console.log("Kassidel hääli: " + catData);
      this.catVotes = catData;
    });

    this.socket.on('dogvotes', (dogData) => {
      console.log("Koertel hääli: " + dogData);
      this.dogVotes = dogData;
    });
    
  }

  voteCats() {
    this.votingService.voteForCats()
      .subscribe(data => this.response = data);
    this.socket.emit('cat vote');
  }

  voteDogs() {
    this.votingService.voteForDogs()
      .subscribe(data => this.response = data);
    this.socket.emit('dog vote');
  }

}
