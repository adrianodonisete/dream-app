import { Component, OnInit } from '@angular/core';
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
    { 'name': 'TV', 'description': 'Details of televions' },
    { 'name': 'DVD Player', 'description': 'Details of DVD Player' },
    { 'name': 'iPhone', 'description': 'Details of iPhone' },
    { 'name': 'CD Player', 'description': 'Details of CD Player' },
  ];

  constructor() { }

  ngOnInit() {
  }

  share() {
    
  }

}
