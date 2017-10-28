import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSubmitComponent } from './contract-submit.component';

describe('ContractSubmitComponent', () => {
  let component: ContractSubmitComponent;
  let fixture: ComponentFixture<ContractSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
