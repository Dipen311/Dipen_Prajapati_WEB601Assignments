import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { TravelDataService } from '../services/travel-data.service';
@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {

  id?:number;
  tItem?:Content;
  constructor(private route: ActivatedRoute, private travelService:TravelDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id=Number(params.get('id') ?? "0");
      this.tItem  = this.travelService.getSingleItem(this.id);
    });
  }
  

}
