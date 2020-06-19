import { Component, OnInit } from '@angular/core';
import { TestService } from '../test/services/test.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss'],
  providers: [ TestService ]
})
export class View1Component implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.testConsole('2222222');
  }

}
