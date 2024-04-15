import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  onAdd(product: Product): void {
    this.productService.addProduct(product);
  }

  onEdit(product: Product): void {
    this.productService.updateProduct(product);
  }

  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
