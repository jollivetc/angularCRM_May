import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angularCRM';

  emitted($event:string){
    console.log($event)
  }
  emitted2($event:string){
    console.log("emitted 2")
  }
}
