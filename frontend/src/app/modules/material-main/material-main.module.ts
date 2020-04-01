import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialArr = [
  FlexLayoutModule , MatFormFieldModule,MatInputModule,MatCardModule, 
   MatListModule,MatButtonModule,MatIconModule,MatTableModule, MatPaginatorModule,
   MatSortModule,MatSelectModule,CommonModule,MatSnackBarModule
]

@NgModule({
  imports: [
    ...materialArr
  ],
  exports: [
    ...materialArr
  ]
})
export class MaterialMainModule { }
