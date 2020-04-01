import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product.component';
import { MaterialMainModule } from 'src/app/modules/material-main/material-main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
{ path: '', component:AddProductComponent, pathMatch: 'full'},
// {path: 'add', component: AddProductComponent}
]

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    MaterialMainModule,
    FormsModule,
    ReactiveFormsModule,
      RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class AddProductModule { }
