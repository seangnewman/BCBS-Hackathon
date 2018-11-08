import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpoBotComponent } from './ppo-bot.component';

describe('PpoBotComponent', () => {
  let component: PpoBotComponent;
  let fixture: ComponentFixture<PpoBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpoBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpoBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
