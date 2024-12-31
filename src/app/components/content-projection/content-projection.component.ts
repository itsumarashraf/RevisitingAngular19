import { Component, computed, InputSignal, model, signal, viewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { WeatherWidgetComponent } from "../weather-widget/weather-widget.component";
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

interface User{
  name:string;
  age:number;
}
@Component({
  selector: 'app-content-projection',
  imports: [WeatherWidgetComponent, FormsModule,JsonPipe],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContentProjectionComponent {
  weatherWidget = viewChild(WeatherWidgetComponent)
  WeatherWidgetUser = computed(()=> this.weatherWidget()?.value())
  name = signal('')
  counter = 0

  user:User[] = [];

  onchangeHandle(event:any){
    console.log(event.target.value)
    this.name.set(event.target.value)
  }

  handleEmitFromChild(event:any){
    console.log(event)
  }

  ngOnInit(){
    console.log('this is console.log ',this.weatherWidget()?.value())
    
  }
  
  ngafterViewInit(){
    // this.weatherWidget?.umar()
    // console.log('this is console.log(afterviewinit) ',this.WeatherWidgetUser)
  }
}
