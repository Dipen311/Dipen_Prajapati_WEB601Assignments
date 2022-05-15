import { Component } from '@angular/core';
import { Content } from './models/content';
import { ContentList } from './models/content-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '<h1 class="heading-class-separate">Travel Web</h1>';
  name: string; // this variable will now always be a string
  tertiaryName = 'Dipen'; // this variable will ALSO now always be a string

  
  individualContentItem: Content;
  individualContentItem1: Content;
  individualContentItem2: Content;
  individualContentItem3: Content;


  listOfContent?: ContentList;

  readonly valueCannotChange: number;

  constructor() {

    this.name = 'Peter';

    let secondaryName: string;
    secondaryName = 'Andrew';

    this.valueCannotChange = 0;
    for (let i = 0; i < 1000; i++)
    {
      this.valueCannotChange++;
    }

    // can't do this because tertiaryName is a string type
    // this.tertiaryName = 1;

    this.updateName();

    this.individualContentItem = {
      id: 0,
      title: "Dubai",
      imageLink: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Ffeb9a1d0-2a50-11ea-84be-a548267b914b?fit=scale-down&source=next&width=700",
      type: "Dubai is beatifull country"
    };

    // can't do this because it's readonly now
    // can't do this because you need to replace the entire object in order to replace the id in the constructor
    // this.individualContentItem.id = 1;


    // you can however replace the whole object while you're in the constructor
    this.individualContentItem1 = {
      id: 1,
      title: "Singapore",
      imageLink: "http://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg",
      type: "Singapore is awesome country"
    };

    this.individualContentItem2 = {
      id: 2,
      title: "abu dhabi",
      imageLink: "https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2016-12-05/Dubai-skyline.jpg?w=660",
      type: "Abu dhabi is best country"
    };
    this.individualContentItem3 = {
      id: 3,
      title: "Maldives",
      imageLink: "https://media.architecturaldigest.com/photos/6032b337b526975f5405e0a0/16:9/w_2560%2Cc_limit/Hero_Soneva%2520Jani%2520Chapter%2520Two%2520by%2520Aksham%2520Abdul%2520Ghadir.jpg",
      type: "Maldives is paradies of earth."
    };


    


    this.listOfContent = new ContentList(this.individualContentItem);
    console.log("View the array of items in the list: ", this.listOfContent.items);
    console.log("The count of the list is: ", ContentList.contentCount);

    this.processContent(this.individualContentItem);
    this.processContent(this.individualContentItem1);
    this.processContent(this.individualContentItem2);
    this.processContent(this.individualContentItem3);
    

    console.log("Separating my optional test")
    this.processContentOptionally(this.individualContentItem);
    this.processContentOptionally();

  }

  updateName(): void{
    this.name = "Andrew";
  }

  processContent(contentItem: Content): void{
    console.log("Content item id: ", contentItem.id);
    console.log("Content body: " + contentItem.body,
      "Content body without tostring invoked: ", contentItem.body)
    // cannot change the value after the constructor set it
    // this.valueCannotChange = 80;

  }
  processContentOptionally(contentItem?: Content): void{
    // console.log("Content item id: ", contentItem.id); // can't access undefined.id
     console.log("Content item id: ", contentItem?.id); // if contentItem is set, we access the id, otherwise we don't
    if(contentItem)
    {
      console.log("Content body: " + contentItem.body,
        "Content body without tostring invoked: ", contentItem.body)
    }
    // cannot change the value after the constructor set it
    // this.valueCannotChange = 80;

  }
}
