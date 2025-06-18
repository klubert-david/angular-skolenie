import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadpisComponent } from './nadpis.component';

describe('NadpisComponent', () => {
  let component: NadpisComponent;
  let fixture: ComponentFixture<NadpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadpisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NadpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
