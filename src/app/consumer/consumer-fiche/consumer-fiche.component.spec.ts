import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumerService } from '../consumer.service';
import { RouterTestingModule } from '@angular/router/testing'
import { ConsumerFicheComponent } from './consumer-fiche.component';

describe('ConsumerFicheComponent', () => {
  let component: ConsumerFicheComponent;
  let fixture: ComponentFixture<ConsumerFicheComponent>;
  let consumerServiceStub: Partial<ConsumerService>={}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerFicheComponent ],
      imports:[RouterTestingModule],
      providers:[
        {provide: ConsumerService, useValue:consumerServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
