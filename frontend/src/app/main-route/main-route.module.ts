import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {
    path: '',
    loadChildren: () => import('../components/all-product/all-product.module').then(m => m.ALLProductModule)
  },
{
  path: 'add-product',
  loadChildren: () => import('../components/add-product/add-product.module').then(m => m.AddProductModule)
},
{
  path: 'cart',
  loadChildren: () => import('../components/cart/cart.module').then(m => m.CartModule)
}
// {path: 'add', component: AddProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouteModule { }
