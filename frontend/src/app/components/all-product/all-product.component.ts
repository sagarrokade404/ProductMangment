import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsService } from 'src/app/services/products.service';
import { AlrtSnackComponent } from 'src/app/commmon/alrt-snack/alrt-snack.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
var durationInSeconds = environment.durationInSeconds;

export interface UserData {
  id: string;
  name: string;
  price: number;
  category: string;
}

/** Constants used to fill up our data base. */




@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  productOption = 'all';
  displayedColumns: string[] = [ 'name', 'price', 'category', 'options'];
  dataSource: MatTableDataSource<UserData>;
  productList = ['all'];
  message;
  
  showTabel = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private productService: ProductsService, private _snackBar: MatSnackBar) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    
  }

  ngOnInit() {
    
  this.productService.getListOfCategory().subscribe(
    (res: any) => {
      console.log('getListOfCategory res',res)
      this.productList.push(...res.data)
    }
  )

    this.productService.eventmsgObservable.subscribe(
      (res: any) => {
        console.log('eventmsgObservable res',res)
        
        if(res  && res.msg === 'updateTable'){
          this.getAllProducts(res.data.category)
          this.productOption = res.data.category;
         
        } else {
          this.getAllProducts('all')
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


  getAllProducts(category) {
    this.productService.getAllProducts({category:category}).subscribe(
      (res: any) => {
        if(res.data.length != 0) {
          this.showTabel = true;
          console.log(res)
          setTimeout(() => {
            this.openSnackBar(res.msg)
          }, 1000);
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.getAllCartData()
        } else {
          this.message  = 'No Data Found'
          this.showTabel = false;
          this.getAllCartData()
        }
      }
    )
  }

  onProductChange(){
    console.log('onProductChange chnage',this.productOption)
    this.getAllProducts(this.productOption)
  }

  deleteProduct(id) {
    console.log('deleteProduct id',id)
    this.productService.deleteProduct(id).subscribe(
      (res:any) => {
        console.log('deleteProduct res',res)
        this.getAllProducts(res.data)
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

  addCartToProduct(product) {
    console.log('addCartToProduct',product)
    this.productService.addCartToProduct(product).subscribe(
      (res) => {
        console.log('addCartToProduct res',res)
        this.getAllCartData()
      }
    )
  }


  getAllCartData() {
    this.productService.getAllCart().subscribe(
      (res:any) => {
        console.log('getAllCart res',res);
       this.productService.changecartLenth( res.data.cartLenth);
        
      }
    )
  }
}
