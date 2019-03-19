import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPainterComponent } from './screen-painter.component';

describe('ScreenPainterComponent', () => {
  let component: ScreenPainterComponent;
  let fixture: ComponentFixture<ScreenPainterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPainterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
