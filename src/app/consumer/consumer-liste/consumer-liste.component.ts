import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss']
})
export class ConsumerListeComponent implements OnInit, OnDestroy{

  consumers?:Consumer[];
  private subs: Subscription[]=[]

  constructor(private consumersService : ConsumerService) { }

  ngOnInit(): void {
    const sub: Subscription = this.consumersService.getConsumers().subscribe({
      next:(consumers:Consumer[])=>{this.consumers=consumers},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{}
    })
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }
}
