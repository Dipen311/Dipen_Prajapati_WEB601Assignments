import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { TravelDataService } from '../services/travel-data.service';

@Component({
  selector: 'app-content-change',
  templateUrl: './content-change.component.html',
  styleUrls: ['./content-change.component.scss']
})
export class ContentChangeComponent implements OnInit {
  contentItem: Content ={
    title: "",
    body: "",
    hashtags: [],
    author: ''
  };
  tempTags: string = '';
  constructor(private contentService: TravelDataService) { 


  }

  ngOnInit(): void {
  }
  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.addContent(this.contentItem);
  }
  updateContentOnServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.contentService.updateContent(this.contentItem, this.contentItem.id);
  }
}
