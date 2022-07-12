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
    const travel: Content[] = travelList;
    return {
      travel: travel
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }

}
