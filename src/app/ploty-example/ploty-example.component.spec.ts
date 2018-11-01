import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotyExampleComponent } from './ploty-example.component';

describe('PlotyExampleComponent', () => {
  let component: PlotyExampleComponent;
  let fixture: ComponentFixture<PlotyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
