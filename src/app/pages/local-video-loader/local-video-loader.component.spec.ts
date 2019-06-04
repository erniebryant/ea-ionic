import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVideoLoaderComponent } from './local-video-loader.component';

describe('LocalVideoLoaderComponent', () => {
  let component: LocalVideoLoaderComponent;
  let fixture: ComponentFixture<LocalVideoLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVideoLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVideoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
