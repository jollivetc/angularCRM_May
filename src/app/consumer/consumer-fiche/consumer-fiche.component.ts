import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private consumerService:ConsumerService, private router:Router) {
    this.consumerForm = new FormGroup({
      id: new FormControl(),
      civility: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  onSubmit(){
    this.subs.push(this.consumerService.createConsumer(this.consumerForm.value).subscribe({
      next:(result:Consumer)=>{this.router.navigateByUrl("/consumers")},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{}
    }));
  }
  onCancel(){
    this.router.navigateByUrl('/consumers');
  }

}
