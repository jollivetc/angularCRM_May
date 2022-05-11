import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phoneNumber:string = '0123456789';
  myDate : Date=new Date();
  constructor(private demo:DemoObservableService) { }

  ngOnInit(): void {
  }

  clickMe():void {
    this.demo.test1()
        .pipe(
          map((x:number)=>x*10),
          take(2)
        ).subscribe({
          next: (result:number)=>{console.log(result)},
          error:(error:Error)=>{console.error(error)},
          complete: ()=>{console.log('Fini')}
    });
  }

}
