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
      id: 1,
      title: 'Maldives',
      author: "Dipen",
      imageLink: "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg",
      type: "Beach area"
    },{
      id: 2,
      title: 'Dubai',
      author: "Dipen",
      imageLink: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
      type: "Advanture"
    },
    {
      id: 3,
      title: 'Abu dhabi',
      author: "Dipen",
      imageLink: "https://www.azamara.com/sites/default/files/heros/abu-dhabi-united-arab-emirates_0.jpg",
      type: "Beach area"
    },
    {
      id: 4,
      title: 'Singapor',
      author: "Dipen",
      imageLink: "https://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",
      type: "Adventure"
    },
    {
      id: 5,
      title:'Las Vegas',
      author: "Dipen",
      imageLink: 'http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      type: "Adventure"
    },
    {
      id: 6,
      title:'Rome',
      author: "italy",
      imageLink: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
      type: "History"
    },
    {
      id: 7,
      title:'Santorini',
      author: "Greek",
      imageLink: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/81/30/3f/caption.jpg?w=700&h=-1&s=1&cx=1846&cy=1833&chk=v1_6ae0a81ae3361e988707',
      type: "Adventure"
    },
    {
      id: 8,
      title:'Valley of Kings',
      author: "Egypt",
      imageLink: 'https://images.mapsofworld.com/allwonders/2013/07/Valley-of-the-Kings.jpg',
      type: "Adventure"
    },
  ];
  }

  ngOnInit(): void {
  }

}
