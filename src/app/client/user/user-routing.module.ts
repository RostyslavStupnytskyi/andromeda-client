import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SellerComponent} from '../seller/seller.component';
import {CreateAdvertisementComponent} from '../seller/create-advertisement/create-advertisement.component';
import {UserComponent} from './user.component';
import {CartComponent} from './cart/cart.component';
import {OrderMakingComponent} from './order-making/order-making.component';
import {UserOrdersComponent} from './user-orders/user-orders.component';
import {UserOrderDataComponent} from './user-order-data/user-order-data.component';
import {OrderFeedbackComponent} from './order-feedback/order-feedback.component';
import {AddressesManageComponent} from './addresses-manage/addresses-manage.component';
import {NotificationPageComponent} from './notification-page/notification-page.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'order', component: OrderMakingComponent
    },
    {
      path: 'orders', component: UserOrdersComponent
    },
    {
      path: 'order-data', component: UserOrderDataComponent
    },
    {
      path: 'feedback', component: OrderFeedbackComponent
    },
    {
      path: 'addresses', component: AddressesManageComponent
    },
    {
      path: 'notifications', component: NotificationPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
