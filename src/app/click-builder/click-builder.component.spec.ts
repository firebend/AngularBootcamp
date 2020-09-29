import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickBuilderComponent } from './click-builder.component';

describe('ClickBuilderComponent', () => {
  let component: ClickBuilderComponent;
  let fixture: ComponentFixture<ClickBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
