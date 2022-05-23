import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_prajapati_travel';
  myList: List;

  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'Maldives',
      author: "Dipen",
      imageLink: "https://www.planetware.com/wpimages/2021/07/maldives-best-all-inclusive-resorts-hurawalhi-island-resort-villa.jpg",
      type: "Beach area",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'Dubai',
      author: "Dipen",
      imageLink: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
      type: "Advanture",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Abu dhabi',
      author: "Dipen",
      imageLink: "https://www.azamara.com/sites/default/files/heros/abu-dhabi-united-arab-emirates_0.jpg",
      type: "Amazing country",

    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'Singapor',
      author: "Dipen",
      imageLink: "https://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",
      type: "Adventure",
    };
    this.myList.addContent(contentitem);

  }
}
