import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { AlrtSnackComponent } from 'src/app/commmon/alrt-snack/alrt-snack.component';
import { environment } from 'src/environments/environment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface UserData {
  id: string;
  name: string;
  price: number;
  category: string;
}

var durationInSeconds = environment.durationInSeconds;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productOption = 'all';
  displayedColumns: string[] = [ 'name', 'price', 'category', 'quntity','options'];
  dataSource: MatTableDataSource<UserData>;
  productList = ['all'];
  message;
  TotalPrice = 0;
  showTabel = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private productService: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.productService.getAllCart().subscribe(
      (res: any) => {
        if(res.data.length != 0) {
          this.showTabel = true;
          console.log(res)
          setTimeout(() => {
            this.openSnackBar(res.msg)
          }, 1000);
          console.log('res.data.cartData',res.data.cartData)
          this.dataSource = new MatTableDataSource(res.data.cartData);
          this.TotalPrice = res.totalPrice;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        
        } else {
          this.message  = 'No Data Found'
          this.showTabel = false;
         
        }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteProduct(id) {
    console.log('deleteProduct id',id)
    this.productService.deleteCartItem(id).subscribe(
      (res:any) => {
        console.log('deleteProduct res',res)
        this.getAllProducts()
        this.openSnackBar(res.msg)
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
