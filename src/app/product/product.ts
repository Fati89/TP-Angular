import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class Product implements OnInit{
  products! : Array<any>;
  Constructor(){}
  ngOnInit(){
    this.products = [
          {id: 1, name: 'Computer', price: 2300, selected: true},
          {id: 2, name: 'Printer', price: 1200, selected: false},
          {id: 3, name: 'Smart Phone', price: 1100, selected: true}
      ]
  }
  handelDelete(product: any){
    let v = confirm('Etes vous sure de vouloir supprimer ce produit ?');
    if (v){
      this.products = this.products.filter((p:any)=>p.id != product.id);
    }

  }
}
