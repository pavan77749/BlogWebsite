import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContitionsComponent } from './terms-contitions.component';

describe('TermsContitionsComponent', () => {
  let component: TermsContitionsComponent;
  let fixture: ComponentFixture<TermsContitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsContitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TermsContitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
