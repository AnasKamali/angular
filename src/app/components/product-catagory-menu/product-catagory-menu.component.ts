import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-catagory-menu',
  templateUrl: './product-catagory-menu.component.html',
  styleUrls: ['./product-catagory-menu.component.css']
})
export class ProductCatagoryMenuComponent implements OnInit {

  productCategories: ProductCategory[];

  constructor(private producService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories()
  }
  listProductCategories() {
    this.producService.getProductCatagories().subscribe(
      data => {
        console.log('product catagories : ' + data)
        this.productCategories = data
      }
    )
  }

}
