import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



const materialModules =[
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule
]


@NgModule({
  imports: [
    CommonModule,
    materialModules
  ],
  declarations: [],
  exports:[
    materialModules
  ]
})
export class MaterialModule { }
