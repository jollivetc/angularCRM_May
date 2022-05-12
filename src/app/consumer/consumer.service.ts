import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  findConsumers(filter?:string):Observable<Consumer[]>{
    if(!filter){
      filter='';
    }
    return this.http.get<Consumer[]>(`/api/consumers?q=${filter}`);
  }

  saveConsumer(consumer:Consumer):Observable<Consumer>{
    if(consumer.id){
      return this.http.put<Consumer>(`/api/consumers/${consumer.id}`, consumer)
    }else{
      return this.http.post<Consumer>('/api/consumers', consumer);
    }
  }

  getConsumer(id:string):Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${id}`);
  }

  deleteConsumer(id:number):Observable<Object>{
    return this.http.delete<Object>(`/api/consumers/${id}`);
  }
}
