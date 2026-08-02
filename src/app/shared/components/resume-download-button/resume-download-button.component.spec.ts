import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownloadButtonComponent } from './resume-download-button.component';

describe('ResumeDownloadButtonComponent', () => {
  let component: ResumeDownloadButtonComponent;
  let fixture: ComponentFixture<ResumeDownloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDownloadButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
