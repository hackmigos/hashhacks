import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPartyComponent } from './contract-party.component';

describe('ContractPartyComponent', () => {
  let component: ContractPartyComponent;
  let fixture: ComponentFixture<ContractPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
