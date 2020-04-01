import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { AlrtSnackComponent } from 'src/app/commmon/alrt-snack/alrt-snack.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

var durationInSeconds = environment.durationInSeconds;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  productForm : FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar,
              private _ProductsService: ProductsService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productPrice: [1, [Validators.required,  Validators.min(1)]],
      productCategory: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  addNewProduct() {
    console.log(this.productForm.value)
    this._ProductsService.addNewProduct(this.productForm.value).subscribe(
      (res:any) => {
        console.log('addNewProduct res',res)
        if(res.code === 200) {
          this.openSnackBar(res.msg)
        const  updateMsg = {
            msg: 'updateTable',
            data: res.data
          }
          
            // this._ProductsService.changeEventMessage(updateMsg);
            this.router.navigateByUrl('/')
        }
      }
    )
  }


  openSnackBar(payload) {
    this._snackBar.openFromComponent(AlrtSnackComponent, {
      duration: durationInSeconds * 1000,
      data:payload,
  
      panelClass: ["alertclass"]
    });
  }
}
