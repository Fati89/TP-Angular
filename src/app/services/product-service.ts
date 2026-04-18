import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
      {id: 1, name: 'Computer', price: 2300, selected: true},
      {id: 2, name: 'Printer', price: 1200, selected: false},
      {id: 3, name: 'Smart Phone', price: 1100, selected: true}
    ]
    constructor(private http: HttpClient){

    }
    getAllProducts(){
      return this.products;
    }
    getAllProducts_http(): Observable<any>{
      return this.http.get("http://localhost:8083/products");
    }
    DeleteProduct(product : any){
      this.products = this.products.filter((p:any)=>p.id != product.id);
    }
    DeleteProduct_http(product : any): Observable<any>{
        return this.http.delete("http://localhost:8083/products/"+product.id);
      }
  }
