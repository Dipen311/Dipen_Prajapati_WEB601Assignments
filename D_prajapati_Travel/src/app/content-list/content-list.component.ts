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
    let contentitem: Content;

    contentitem = {
      id: 0,
      title: 'Maldives',
      author: "Dipen",
      imageLink: "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg",
      type: "Beach area",
    };
    contentitem = {
      id: 1,
      title: 'Dubai',
      author: "Dipen",
      imageLink: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
      type: "Advanture",
    };
    contentitem = {
      id: 2,
      title: 'Abu dhabi',
      author: "Dipen",
      imageLink: "https://www.azamara.com/sites/default/files/heros/abu-dhabi-united-arab-emirates_0.jpg",
      type: "Amazing country",

    };
    
    contentitem = {
      id: 3,
      title: 'Singapor',
      author: "Dipen",
      imageLink: "https://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",
      type: "Adventure",
    };

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