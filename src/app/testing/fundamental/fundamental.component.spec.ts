import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalComponent, compute } from './fundamental.component';

describe('FundamentalComponent', () => {
  let component: FundamentalComponent;
  let fixture: ComponentFixture<FundamentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('compute', ()=>{
  it('return 0 if input is negative', ()=>{
    let result = compute(-1);
    expect(result).toBe(0);
  })
  it('should increment input if input is positive', ()=>{
    let result = compute(1);
    expect(result).toBe(2);

  })
})