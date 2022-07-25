
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PriceComponent } from './pirce/price/price.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UploadProductsComponent } from './product/manage-product/upload-products/upload-products.component';
import { PayComponent } from './pay/pay/pay.component';
import { EditProductComponent } from './product/manage-product/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './user/information/information.component';
import { LogAndSecComponent } from './user/log-and-sec/log-and-sec.component';
import{ UserDetailComponent }from './user-detail/user-detail.component';
import{ InvoicesComponent}from './admin/account/account-settings/invoices/invoices.component';
import{ ShippingComponent}from './admin/account/account-settings/shipping/shipping.component';
import{ NotificationsComponent}from './admin/account/account-settings/notifications/notifications.component';
import{ AccessComponent}from './admin/account/account-settings/access/access.component';
import{ BusinessComponent}from './admin/account/account-settings/business/business.component';
import{ OwnerComponent}from './admin/account/account-settings/owner/owner.component';
import{ PaymentComponent}from './admin/account/account-settings/payment/payment.component';
import{ ManageHomeComponent}from './manage/manage-home/manage-home.component';
import{ ProjectListComponent}from './manage/project-list/project-list.component';
import{ ProjectDetailComponent}from './manage/project-detail/project-detail.component';
import{ TaskListComponent}from './manage/task-list/task-list.component';
import{ TaskDetailComponent}from './manage/task-detail/task-detail.component';
import{ PercentDetailComponent}from './manage/percent-detail/percent-detail.component';
import{ SidebarComponent}from './manage/sidebar/sidebar.component';
import{ DialogProjectBlankComponent}from './manage/dialog-project-blank/dialog-project-blank.component';
import{ DialogTaskBlankComponent}from './manage/dialog-task-blank/dialog-task-blank.component';
import{ ProjectUserListComponent}from './manage/project-user-list/project-user-list.component';
import{ ProjectUserDetailComponent}from './manage/project-user-detail/project-user-detail.component';
import{ TaskUserListComponent}from './manage/task-user-list/task-user-list.component';
import{ TaskUserDetailComponent}from './manage/task-user-detail/task-user-detail.component';
import{ DialogProjectUserComponent}from './manage/dialog-project-user/dialog-project-user.component';
import{ DialogTaskUserComponent}from './manage/dialog-task-user/dialog-task-user.component';
import{ ProjectHomeComponent}from './manage/project-home/project-home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ReallyFreshComponent } from './product/really-fresh/really-fresh.component';
import { EbarterComponent } from './product/ebarter/ebarter.component';
const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "information",component:InformationComponent},
  {path: "logandsec",component:LogAndSecComponent},
  {path: "userdetail",component:UserDetailComponent},
  {path: "invoices",component:InvoicesComponent},
  {path: "product",component:ProductDetailComponent},
  {path: "price",component:PriceComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"product-detail",component:ProductDetailComponent},
  { path: "really-fresh", component: ReallyFreshComponent },
  { path: "ebarter", component: EbarterComponent},
  {path:"edit-product",component:EditProductComponent},
  {path:"upload-product",component:UploadProductsComponent},
  {path:"pay",component:PayComponent},
  {path: "home", component: HomeComponent},
  {path: "information",component:InformationComponent},
  {path: "logandsec",component:LogAndSecComponent},
  {path: "userdetail",component:UserDetailComponent},
  {path: "invoices",component:InvoicesComponent},
  {path: "shipping",component:ShippingComponent},
  {path: "notifications",component:NotificationsComponent},
  {path: "access",component:AccessComponent},
  {path: "business",component:BusinessComponent},
  {path: "owner",component:OwnerComponent},
  {path: "payment",component:PaymentComponent},
  {path: "managehome",component:ManageHomeComponent},
  {path: "projectlist",component:ProjectListComponent},
  {path: "projectdetail",component:ProjectDetailComponent},
  {path: "tasklist",component:TaskListComponent},
  {path: "taskdetail",component:TaskDetailComponent},
  {path: "percentdetail",component:PercentDetailComponent},
  {path: "sidebar",component:SidebarComponent}, 
  {path: "dialogprojectblank",component:DialogProjectBlankComponent},
  {path: "dialogtaskblank",component:DialogTaskBlankComponent},
  {path: "projectuserlist",component:ProjectUserListComponent},
  {path: "projectuserdetail",component:ProjectUserDetailComponent},
  {path: "taskuserlist",component:TaskUserListComponent},
  {path: "taskuserdetail",component:TaskUserDetailComponent},
  {path: "dialogprojectuser",component:DialogProjectUserComponent},
  {path: "dialogtaskuser",component:DialogTaskUserComponent},
  {path: "projecthome",component:ProjectHomeComponent},
  {path:"side-bar",component:SideBarComponent,
  children: [
    //商品审核
    { path: "product-detail", component: ProductDetailComponent },
    ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
