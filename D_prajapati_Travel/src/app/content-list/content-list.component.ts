import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { TravelDataService } from '../services/travel-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  temp = false;
  itsAvailable = "";
  itsNotAvailable = "";

  title = "Travel";
  travelList: Content[];
  singleTravel: Content | undefined;
  constructor(private travelService : TravelDataService) {
    this.travelList = [];
  
  }
  ngOnInit(): void {
    
    this.travelList = this.travelService.getContent();
    this.singleTravel = this.travelService.getSingleItem(5);

    throw new Error('Method not implemented.');
    
  }

  updatePage(cardNameOnTheTypescriptSide: string): void {
    
   
    this.travelList.forEach(t => {
      if (t.author == cardNameOnTheTypescriptSide ){
        this.temp = true;
      }
    });
    if(this.temp){
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is available in list.";
      this.itsAvailable = cardNameOnTheTypescriptSide;
      this.itsNotAvailable = "";

    }else{
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is not available in list.";
      this.itsNotAvailable = cardNameOnTheTypescriptSide;
      this.itsAvailable = "";
    }
    this.temp = false;
    
  }
  
}