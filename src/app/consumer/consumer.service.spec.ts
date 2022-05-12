import { async, TestBed, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ConsumerService } from './consumer.service';
import { Consumer } from './model/consumer';

describe('ConsumerService', () => {
  let service: ConsumerService;
  let httpTestingController : HttpTestingController
  let consumer:Consumer;
  let returnedConsumer:Consumer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    httpTestingController=TestBed.inject(HttpTestingController)
    service = TestBed.inject(ConsumerService);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a consumer and return created consumer',waitForAsync(()=>{
    consumer = {civility:"mr", firstname:"B", lastname:"C",email:"D",phone:"E"}
    returnedConsumer={id:1, civility:"mr", firstname:"B", lastname:"C",email:"D",phone:"E"}

    service.saveConsumer(consumer).subscribe({
      next:(result:Consumer)=>{
        expect(result).toBe(returnedConsumer)
      }
    });

    const request = httpTestingController.expectOne('/api/consumers');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toBe(consumer);

    request.flush(returnedConsumer);
  }))

});
