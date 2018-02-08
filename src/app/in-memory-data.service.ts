import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService  {

  createDb()
  {
    let notes = [
      { id: 1, title: 'test title', text: 'test text'}
    ];
    return {notes};
  }

}
