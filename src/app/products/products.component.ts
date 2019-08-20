import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productsOld = [
    'TV', 'DVD Player', 'iPhone', 'CD'
  ];

  @Input() products = [
    { 'name': 'TV', 'description': 'Details of televions', 'price': 2000.20 },
    { 'name': 'DVD Player', 'description': 'Details of DVD Player', 'price': 800.30 },
    { 'name': 'iPhone', 'description': 'Details of iPhone', 'price': 7000.99 },
    { 'name': 'CD Player', 'description': 'Details of CD Player', 'price': 500.10 },
  ];
  
  @Output() products2 = this.products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

}
