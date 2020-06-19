import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  readonly MORE_TYPE_LIST: string[];

  constructor() {
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

  testConsole(str: string) {
    console.log('TestService: ', str);
  }
}
