import { Injectable } from '@angular/core';
import { travelList } from '../data/mock-travel-db';
import { Content } from '../models/content';
@Injectable({
  providedIn: 'root'
})
export class TravelDataService {

  constructor() { 
  }
  getContent(): Content[]{
    return travelList;
  }
  getSingleItem(id: number): Content{
    return travelList[(id-1)];
  }
  addContent(newContent: Content): Content[]{
    travelList.push(newContent);
    return travelList;
  }
  updateContent(newContent: Content, id ?: number): Content[]{
    if(id == undefined){
      return travelList;
    }else{
      travelList[id] = newContent;
      return travelList;
    }
    
  }
  removeContent(id:number): Content{
    let removedContent: Content;
    removedContent = travelList[id];
    travelList.splice(id,1);
    return removedContent;
  }
}


