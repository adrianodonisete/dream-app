import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Input() theStock;

  constructor() { }

  ngOnInit() {
  }

}
