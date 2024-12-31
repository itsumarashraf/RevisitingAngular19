import { Directive, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  selectFrom = input.required<any>()

  constructor(private templateRef:TemplateRef<any>,
    private vcr:ViewContainerRef) { }

    async ngOnInit(){
      const data  = await this.selectFrom().load();
      this.vcr.createEmbeddedView(this.templateRef, {$implicit: data})
    }
}
