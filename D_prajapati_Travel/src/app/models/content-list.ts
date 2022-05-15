import { Content } from "./content";

export class ContentList {
    static contentCount = 0;
    private _items: Content[]; 
    constructor(item: Content){
        this._items = [];
        this._items[0] = item;
        this.increaseCount();
    }
    get items():Content[]{
        return this._items;
    }
    increaseCount(){
        return ++ContentList.contentCount;
    }
}
