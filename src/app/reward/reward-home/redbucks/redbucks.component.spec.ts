import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbucksComponent } from './redbucks.component';

describe('RedbucksComponent', () => {
  let component: RedbucksComponent;
  let fixture: ComponentFixture<RedbucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedbucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
