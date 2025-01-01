import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  products: any[] = [{ id: 1, name: 'Laptop', price: 75000 },
  { id: 2, name: 'Smartphone', price: 30000 },
  { id: 3, name: 'Tablet', price: 20000 },];
  showMsg: boolean = false;
  color :string="red";

  ngOnInit(): void {
    if(this.products.length===0){
      this.showMsg=true;
      this.color="yellow";
    }
  }
}
