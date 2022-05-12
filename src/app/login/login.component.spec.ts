import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';
import { HelpComponent } from '../component/help/help.component';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing'

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationStub: Partial<AuthenticationService>={
    disconnect: ()=>{}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        AppMaterialModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers:[
        {provide:AuthenticationService, useValue:authenticationStub}
      ],
      declarations: [ LoginComponent, HelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    spyOn<Partial<AuthenticationService>, any>(authenticationStub, 'disconnect');
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should disable login button on startup', ()=>{
    const element = fixture.nativeElement;
    expect(element.querySelector('button').disabled).toBeTrue();
  })
  it('should call disconnect', ()=>{
    expect(authenticationStub.disconnect).toHaveBeenCalled();
  })
});
