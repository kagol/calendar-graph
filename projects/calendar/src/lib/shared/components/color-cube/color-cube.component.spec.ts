import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCubeComponent } from './color-cube.component';

describe('ColorCubeComponent', () => {
  let component: ColorCubeComponent;
  let fixture: ComponentFixture<ColorCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
