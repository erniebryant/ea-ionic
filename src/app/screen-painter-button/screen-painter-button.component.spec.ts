import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPainterButtonComponent } from './screen-painter-button.component';

describe('ScreenPainterButtonComponent', () => {
  let component: ScreenPainterButtonComponent;
  let fixture: ComponentFixture<ScreenPainterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPainterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPainterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
