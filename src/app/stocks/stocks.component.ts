import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  @Input() stocks = [
    { 'id': 0, 'name': 'Itaú Unibanco ON', 'code': 'ITUB3' },
    { 'id': 1, 'name': 'AMBEV ON', 'code': 'ABEV3' },
    { 'id': 2, 'name': 'Grendene ON', 'code': 'GRND3' },
    { 'id': 3, 'name': 'WEG ON', 'code': 'WEGE3' },
    { 'id': 4, 'name': 'ENGIE ON', 'code': 'EGIE3' },
  ];

  @Input() showDetail: boolean = false;
  
  @Input() theStock = { 'id': 0, 'name': '-', 'code': '-' };

  constructor() { }

  ngOnInit() {
  }

  showDetailStock(value: number) {
    this.showDetail = true;
    this.theStock = { 'id': value, 'name': 'Itaú Unibanco ON '+value, 'code': 'ITUB3 '+value }
  }

}
