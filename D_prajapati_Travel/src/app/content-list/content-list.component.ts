import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  title = "Travel";
  travelList: Content[];
  constructor() {
    this.travelList = [{
      id: 0,
      title: 'Maldives',
      author: "Dipen",
      imageLink: "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg",
      type: "Beach area"
    },{
      id: 1,
      title: 'Dubai',
      author: "Dipen",
      imageLink: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
      type: "Advanture"
    },
    {
      id: 2,
      title: 'Abu dhabi',
      author: "Dipen",
      imageLink: "https://www.azamara.com/sites/default/files/heros/abu-dhabi-united-arab-emirates_0.jpg",
      type: "Amazing country"
    },
    {
      id:3,
      title:'India',
      author: "Dipen",
      imageLink: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg',
      type: "Amazing country"
    },
    {
      id: 3,
      title: 'Singapor',
      author: "Dipen",
      imageLink: "https://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",
      type: "Adventure"
    },
    {
      id: 4,
      title:'Las Vegas',
      author: "Dipen",
      imageLink: 'http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      type: "Adventure"
    },
  ];
  }

  ngOnInit(): void {
  }

}
