import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductGuardService} from '../product-guard.service';
import {ProductService} from '../product.service';
import {SharedModule} from '../../shared/shared.module';

import {ProductListComponent} from '../product-list.component';
import {ProductDetailComponent} from '../product-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent
      },
    ]),
    SharedModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
