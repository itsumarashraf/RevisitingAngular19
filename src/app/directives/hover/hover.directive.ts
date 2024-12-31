import { Directive, ElementRef, HostListener, Input, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ProductsListComponent } from '../../pages/products-list/products-list.component';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  
  appHover = input.required();

  // @Input() set appShow(condition: boolean) {
  //   if (condition) {
  //     this.vr.createEmbeddedView(this.tr);
  //   } else {
  //     this.vr.clear();
  //   }
  // }
  
  constructor(private er: ElementRef,
    private vr: ViewContainerRef,) {

   }


   @HostListener('mouseenter') 
   onMouseEnter() {
    this.er.nativeElement.style.backgroundColor = this.appHover();
    this.er.nativeElement.style.cursor = 'pointer';
   }

   @HostListener('mouseleave')
    onMouseLeave() {
      this.er.nativeElement.style.backgroundColor = 'white';
    }

    @HostListener('click')
    onClick(){
      alert('im clicked')
    }

    
}
