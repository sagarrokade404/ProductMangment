import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialMainModule } from 'src/app/modules/material-main/material-main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product.component';

const routes : Routes = [
{ path: '', component:AllProductComponent, pathMatch: 'full'},
// {path: 'add', component: AddProductComponent}
]

@NgModule({
  declarations: [
    AllProductComponent
  ],
  imports: [
    MaterialMainModule,
    FormsModule,
    ReactiveFormsModule,
      RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class ALLProductModule { }
