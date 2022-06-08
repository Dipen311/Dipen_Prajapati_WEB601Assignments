import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightTitle]'
})
export class HighlightTitleDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appHighlightTitle') clickclass:any;  
  private isHighlighted: boolean = false;
  
  @HostListener('click') onClick() {
    this.elementRef.nativeElement.classList.add(this.clickclass);
 }
}
