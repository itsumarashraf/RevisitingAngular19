import { Component, HostBinding, HostListener, model, output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent {

  //Model inputs are a special type of input that enable a component to propagate new values back to its parent component. 
  value = model(90)
  user = model()
  umar:string= 'umarashraf nacs'
  good:string='good'
  emitOutside = output<string>({alias:'umar'}) //alias is optional that can be used to give a name to the output event for using it in the parent component
  
  increment() {
    // Update the model input with a new value, propagating the value to any bindings. 
    this.value.update(oldValue => oldValue + 10);
  }

  SendEventToParent(){
    this.user.set([{name:'John', age:25},{name:'fa', age:25},{name:'fewq', age:25}])
  }

  SendEventToParentUsingOutput(){
    this.emitOutside.emit('Hello from child')
  }

  @HostBinding('class.hig') isHighlighted = true;
  val = false
  // Method to toggle highlight
  toggleHighlight(state: boolean) {
    this.val=state
    console.log('state', state)
    this.isHighlighted = state;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered');
  }
}
