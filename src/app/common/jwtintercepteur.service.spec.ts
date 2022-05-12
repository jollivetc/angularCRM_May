import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../login/authentication.service';

import { JWTIntercepteurService } from './jwtintercepteur.service';

describe('JWTIntercepteurService', () => {
  let service: JWTIntercepteurService;
  let authenticationStub: Partial<AuthenticationService>={};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JWTIntercepteurService,
        {provide:AuthenticationService, useValue:authenticationStub}
      ]
    });
    service = TestBed.inject(JWTIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
