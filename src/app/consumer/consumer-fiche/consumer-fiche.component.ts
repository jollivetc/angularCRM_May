import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit, OnDestroy {

  consumerForm: FormGroup;
  private subs: Subscription[]=[]

  constructor(private consumerService:ConsumerService, private router:Router, private route:ActivatedRoute) {
    this.consumerForm = new FormGroup({
      id: new FormControl(),
      civility: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      createdAt: new FormControl()
    });
   }

  ngOnInit(): void {
    let id: string|null = this.route.snapshot.paramMap.get('id');
    if(id!==null){
      this.subs.push(this.consumerService.getConsumer(id).subscribe({
        next:(result:Consumer)=>{this.consumerForm.patchValue(result)},
        error:(error:Error)=>{console.error(error)},
        complete:()=>{}
      }));
    }

  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  onSubmit(){
    this.subs.push(this.consumerService.saveConsumer(this.consumerForm.value).subscribe({
      next:(result:Consumer)=>{this.router.navigateByUrl("/consumers")},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{}
    }));
  }
  onCancel(){
    this.router.navigateByUrl('/consumers');
  }

}
