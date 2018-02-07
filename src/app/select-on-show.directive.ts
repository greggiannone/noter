import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSelectOnShow]'
})
export class SelectOnShowDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit()
  {
    setTimeout(() => { this.el.nativeElement.select() }, 0);
  }
}
