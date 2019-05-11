import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopControlBarComponent } from './top-control-bar.component';

describe('TopControlBarComponent', () => {
  let component: TopControlBarComponent;
  let fixture: ComponentFixture<TopControlBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopControlBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
