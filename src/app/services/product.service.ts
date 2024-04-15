import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() { }

  addProduct(product: Product): void {
    const currentProducts = this.productsSubject.value;
    const updatedProducts = [...currentProducts, product];
    this.productsSubject.next(updatedProducts);
  }

  updateProduct(product: Product): void {
    const currentProducts = this.productsSubject.value;
    const updatedProducts = currentProducts.map(p => p.id === product.id ? product : p);
    this.productsSubject.next(updatedProducts);
  }

  deleteProduct(productId: number): void {
    const updatedProducts = this.productsSubject.value.filter(p => p.id !== productId);
    this.productsSubject.next(updatedProducts);
  }
}
