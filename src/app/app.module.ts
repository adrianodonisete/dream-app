import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StocksComponent } from './stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 