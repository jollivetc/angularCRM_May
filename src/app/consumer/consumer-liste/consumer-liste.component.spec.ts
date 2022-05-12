import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ConsumerService } from '../consumer.service';

import { ConsumerListeComponent } from './consumer-liste.component';

describe('ConsumerListeComponent', () => {
  let component: ConsumerListeComponent;
  let fixture: ComponentFixture<ConsumerListeComponent>;
  let consumerServiceStub:Partial<ConsumerService>={
    findConsumers: (param?: string)=>{
      return new Observable();
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerListeComponent ],
      providers:[
        {provide: ConsumerService, useValue:consumerServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
