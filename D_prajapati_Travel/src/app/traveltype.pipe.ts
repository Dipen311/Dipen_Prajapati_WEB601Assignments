
import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'traveltype'
})
export class TraveltypePipe implements PipeTransform {

  transform(travelList: Content[], typeparameter ?: string):Content[]{
    if(typeparameter==null){
      return travelList.filter(t=>t.type == null );
    }

    return travelList.filter(t=>t.type == typeparameter );
  }
}

