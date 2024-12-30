import { Component, TemplateRef } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight/highlight.directive';
import { HoverDirective } from '../../directives/hover/hover.directive';
import { SelectDirective } from '../../directives/select/select.directive';

@Component({
  selector: 'app-directives',
  imports: [HighlightDirective,HoverDirective,SelectDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  source=[1,2,3,4,5]
}
