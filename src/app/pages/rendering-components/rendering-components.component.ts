import { Component, inject, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { AdminBioComponent } from '../../components/renderingComponents/admin-bio/admin-bio.component';
import { StandardBioComponent } from '../../components/renderingComponents/standard-bio/standard-bio.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-rendering-components',
  imports: [NgComponentOutlet],
  templateUrl: './rendering-components.component.html',
  styleUrl: './rendering-components.component.scss'
})
export class RenderingComponentsComponent {

  isAdmin = true;

  viewContainer = inject(ViewContainerRef);
  @ViewChild('vcr', {read:ViewContainerRef,static:true})
  vcr!: ViewContainerRef;

  @ViewChild('lvcr',{read:ViewContainerRef,static:true})
  lvcr!: ViewContainerRef;



  constructor() { }

  ngOnInit() {
  }
  
  getBioComponent(){
    return this.isAdmin ? AdminBioComponent : StandardBioComponent;
  }

  loadComponentWithViewContainerRef(){
    this.vcr.clear();
    this.vcr.createComponent(StandardBioComponent);
  }
  
  loadSettings:any;
  async lazyloadComponent(){
    this.loadSettings = await import('../../components/renderingComponents/settings/settings.component')

    this.lvcr.clear();
    this.lvcr.createComponent(this.loadSettings.SettingsComponent);
  }
}
