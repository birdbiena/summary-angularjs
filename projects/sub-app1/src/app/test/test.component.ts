import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './services/test.service';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import { TestTypes } from 'src/app/shared/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ TestService ]
})
export class TestComponent implements OnInit, OnDestroy {
  message: string;

  readonly MORE_TYPE_LIST: string[];

  constructor(
    private dataSerivce: ShareDataService
  ) {
    this.MORE_TYPE_LIST = [
      'editYaml',
      'accessMode',
      'podConfiguration',
      'upgradeStrategy',
      'schedulingStrategy',
      'networkSettings',
      'labelSettings'
    ];
  }

  ngOnDestroy(): void {

  }

  ngOnInit() {
    this.dataSerivce.currentMessage.subscribe(msg => this.message = msg);
  }

  handClick() {
    this.dataSerivce.changeMessage('This is test.component.ts handClick Button Event function.');
  }
}
