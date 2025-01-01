import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeTemplateDrivenComponent } from './youtube-template-driven.component';

describe('YoutubeTemplateDrivenComponent', () => {
  let component: YoutubeTemplateDrivenComponent;
  let fixture: ComponentFixture<YoutubeTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
