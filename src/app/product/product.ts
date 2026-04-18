import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product implements OnInit{

  products! : Array<any>;

  constructor(private productService: ProductService) {}

  getAllProducts_http(){
    this.productService.getAllProducts_http().subscribe({
      next: resp => {
        this.products = resp;
      },
      error: err => {}
    });
  }
  getAllProducts(){
    this.products = this.productService.getAllProducts();
  }

  ngOnInit(){
    this.getAllProducts();
  }

  handelDelete(product: any){
    let v = confirm('Etes vous sure de vouloir supprimer ce produit ?');
    if (v){
      this.productService.DeleteProduct_http(product).subscribe({
        next: resp => {
          this.getAllProducts_http();
        },
        error: err => {console.log(err);}
      });
      this.getAllProducts();
    }
  }
}
