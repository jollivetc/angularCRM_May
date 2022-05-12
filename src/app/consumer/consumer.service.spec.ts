import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ConsumerService } from './consumer.service';
import { HttpClient } from '@angular/common/http';

describe('ConsumerService', () => {
  let service: ConsumerService;
  let httpTestingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    httpTestingController=TestBed.inject(HttpTestingController)
    service = TestBed.inject(ConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
