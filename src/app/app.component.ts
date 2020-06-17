import { Component, OnInit } from '@angular/core';
import { ShareDataService } from './shared/services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Main Application';
  points = 1;

  message: string;

  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.currentMessage.subscribe(msg => (this.message = msg));
  }

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }
}
