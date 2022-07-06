import { Component, OnInit } from '@angular/core';

import { Content } from '../models/content';
import { TravelDataService } from '../services/travel-data.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {

  individualTravel?: Content;
  constructor(private travelService: TravelDataService) { }

  ngOnInit(): void {

  }
  checkForIdInList(idValue: string): void {
    this.individualTravel = this.travelService.getSingleItem(Number(idValue));
  }

  
}
