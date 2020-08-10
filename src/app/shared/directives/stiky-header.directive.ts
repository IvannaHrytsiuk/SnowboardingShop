import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStikyHeader]'
})
export class StikyHeaderDirective {

  constructor(private el: ElementRef) {}
  @HostListener('scroll') onScroll(){
    this.setScroll();
  }
  setScroll():void{
    this.el.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
}
