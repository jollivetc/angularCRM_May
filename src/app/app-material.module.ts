import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'


const importsExports = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: importsExports,
  exports: importsExports
})
export class AppMaterialModule { }
