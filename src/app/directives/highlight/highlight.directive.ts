import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  elementRef = inject(ElementRef);

  constructor() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this.elementRef.nativeElement.style.display='inline-block'
    // this.elementRef.nativeElement.style.padding='10px'
    // this.elementRef.nativeElement.style.marginTop='15px'
   }

  


}
