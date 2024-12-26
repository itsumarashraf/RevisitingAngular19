import { Component, input } from '@angular/core';

@Component({
  selector: 'app-admin-bio',
  imports: [],
  templateUrl: './admin-bio.component.html',
  styleUrl: './admin-bio.component.scss'
})
export class AdminBioComponent {

  name = input('');

  ngOnInit() {
    console.log('AdminBioComponent', this.name());
  }
}
