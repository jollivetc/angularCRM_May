import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Apside';
  fruit:string = "Pomme";
  myClass= "apple"
  fruits = ['Cerise', 'poire', 'framboise'];


  onClick($event:MouseEvent){
    this.fruit="Banane"
    this.myClass= "banane"
    console.log($event)
  }
  onSubmit(myForm:NgForm){
    console.log(myForm.value)
  }
}
