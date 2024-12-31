import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingComponentsComponent } from './rendering-components.component';

describe('RenderingComponentsComponent', () => {
  let component: RenderingComponentsComponent;
  let fixture: ComponentFixture<RenderingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderingComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
