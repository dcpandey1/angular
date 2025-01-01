import { Component,OnInit } from '@angular/core';
import { Products } from '../interfaces/product_Interface';
import { Category } from '../interfaces/category_Interface';

@Component({
  selector: 'app-view-products-component',
  templateUrl: './view-products-component.component.html',
  styleUrls: ['./view-products-component.component.css']
})
export class ViewProductsComponentComponent implements OnInit {
  products: Products[]=[];
  showMsgDiv: boolean = false;
  categories:Category[]=[];
  filteredProducts :Products[]=[];
  searchedProducts:Products[]=[];

  searchKeyWord:string="";
  filterKeyWord:string="0";


  constructor() { }
  ngOnInit() {
    this.products = [
       { "productId": "P101", "productName": "Lamborghini Gallardo Spyder", "categoryId": 1, "price": 18000000, "quantityAvailable": 10 },
      { "productId": "P102", "productName": "Ben Sherman Mens Necktie Silk Tie", "categoryId": 2, "price": 1847, "quantityAvailable": 20 },
      { "productId": "P103", "productName": "BMW Z4", "categoryId": 1, "price": 6890000, "quantityAvailable": 10 },
      { "productId": "P104", "productName": "Samsung Galaxy S4", "categoryId": 3, "price": 38800, "quantityAvailable": 100 }
    ]

    this.categories = [
      { "categoryId": 1, "categoryName": "Motors" },
      { "categoryId": 2, "categoryName": "Fashion" },
      { "categoryId": 3, "categoryName": "Electronics" }
    ]

    if (this.products == null)
    {
      this.showMsgDiv = true;
    }
    this.filteredProducts= this.products;
  }

  searchAndFilter(){
    this.filteredProducts= this.products;
    if(this.filterKeyWord!=='0'){
      this.filteredProducts=this.filteredProducts.filter(x=>this.filterKeyWord===
        x.categoryId.toString()
      )
    }

    if(this.searchKeyWord.trim()!==""){
      this.filteredProducts= this.filteredProducts.filter(x=>x.productName.toLowerCase().includes(this.searchKeyWord.toLowerCase()));
    }

  }
  onCategoryChange(name:string){
    this.filterKeyWord=name;
    this.searchAndFilter();
  }

  onSearchChange(name:string){
    this.searchKeyWord=name;
    this.searchAndFilter();
  }
  
  
}
