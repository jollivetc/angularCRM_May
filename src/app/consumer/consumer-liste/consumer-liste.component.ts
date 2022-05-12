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
  search:string= '';
  private subs: Subscription[]=[]

  constructor(private consumersService : ConsumerService) { }

  ngOnInit(): void {
    this.callServer()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  private callServer(param?:string){
    const sub: Subscription = this.consumersService.findConsumers(param).subscribe({
      next:(consumers:Consumer[])=>{this.consumers=consumers},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{}
    })
    this.subs.push(sub);
  }

  doSearch(){
    this.callServer(this.search)
  }

  onDelete(id:number){
    this.subs.push(this.consumersService.deleteConsumer(id).subscribe({
      next:(result:Object)=>{this.callServer()},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{}
    }));
  }
}
