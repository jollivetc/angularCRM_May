import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardGuard } from './authentication-guard.guard';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthenticationGuardGuard', () => {
  let guard: AuthenticationGuardGuard;
  let authenticationStub:Partial<AuthenticationService>={}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[
        {provide:AuthenticationService, useValue:authenticationStub}
      ]
    });
    guard = TestBed.inject(AuthenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
