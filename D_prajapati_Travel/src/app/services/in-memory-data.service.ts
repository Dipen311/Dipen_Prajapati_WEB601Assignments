import { Injectable } from '@angular/core';
import { travelList } from '../data/mock-travel-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const chess: Content[] = travelList;
    return {
      chess: chess
    };
  }

}
