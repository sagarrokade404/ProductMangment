import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
var apiPath = environment.apiPath;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  eventmessageSubject  = new BehaviorSubject<any>('all');

eventmsgObservable = this.eventmessageSubject.asObservable();

cartLenthSubject  = new BehaviorSubject<any>('all');

carLenthObservable = this.cartLenthSubject.asObservable();
  
  constructor( private http: HttpClient) { }

  getAllProducts (category) {
    return this.http.post(`${apiPath}getproducts`, category);

  }

  addNewProduct(product) {
    return this.http.post(`${apiPath}addNewProduct`, product);
  }

  getListOfCategory() {
    return this.http.post(`${apiPath}getListOfCategory`,{});
  }

  deleteProduct(id) {
    return this.http.post(`${apiPath}deleteProduct`,{id:id});
  }

 

  addCartToProduct(product) {
    return this.http.post(`${apiPath}addCartToProduct`,product);
  }
  
  getAllCart() {
    return this.http.post(`${apiPath}getAllCart`, {});
  }
  
  deleteCartItem(id) {
    return this.http.post(`${apiPath}deleteCartItem`, {id:id});
  }
  changeEventMessage(call){
    this.eventmessageSubject.next(call)
  }
  changecartLenth(value){
    this.cartLenthSubject.next(value)
  }
  
  
}
