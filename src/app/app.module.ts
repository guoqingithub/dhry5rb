import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LogoutComponent } from './user/logout/logout.component';
//import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { UploadProductsComponent } from './product/manage-product/upload-products/upload-products.component';
import { EditProductComponent } from './product/manage-product/edit-product/edit-product.component';
import { MyReleasedProductComponent } from './product/manage-product/my-released-product/my-released-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AccountComponent } from './admin/account/account.component';
import { SystemComponent } from './admin/system/system.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialComponent } from './shared/material/material.component';
import { FinanceComponent } from './finance/finance.component';
import { OrderComponent } from './order/order.component';
import { RequestComponent } from './request/request.component';
import { GroupComponent } from './group/group.component';
import { RoleComponent } from './role/role.component';
import { ResetPasswordComponent } from './user/manage-user/reset-password/reset-password.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ManageUserComponent } from './user/manage-user/manage-user/manage-user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { LogAndSecComponent } from './user/log-and-sec/log-and-sec.component';
import { InformationComponent } from './user/information/information.component';
import{CommonModule} from '@angular/common';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';



import { StorageService } from './shared/services/storage/storage.service';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InvoicesComponent } from './admin/account/account-settings/invoices/invoices.component';
import { ShippingComponent } from './admin/account/account-settings/shipping/shipping.component';
import { AccessComponent } from './admin/account/account-settings/access/access.component';
import { PaymentComponent } from './admin/account/account-settings/payment/payment.component';
import { NotificationsComponent } from './admin/account/account-settings/notifications/notifications.component';
import { MoneyComponent } from './admin/account/account-settings/money/money.component';
import { OwnerComponent } from './admin/account/account-settings/owner/owner.component';
import { BusinessComponent } from './admin/account/account-settings/business/business.component';
import { ManageHomeComponent } from './manage/manage-home/manage-home.component';
import { ProjectListComponent } from './manage/project-list/project-list.component';
import { ProjectDetailComponent } from './manage/project-detail/project-detail.component';
import { TaskListComponent } from './manage/task-list/task-list.component';
import { TaskDetailComponent } from './manage/task-detail/task-detail.component';
import { PercentDetailComponent } from './manage/percent-detail/percent-detail.component';
import { SidebarComponent } from './manage/sidebar/sidebar.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule} from '@angular/material/tabs';
import { DialogProjectBlankComponent } from './manage/dialog-project-blank/dialog-project-blank.component';
import { DialogTaskBlankComponent } from './manage/dialog-task-blank/dialog-task-blank.component';
import { ProjectUserListComponent } from './manage/project-user-list/project-user-list.component';
import { ProjectUserDetailComponent } from './manage/project-user-detail/project-user-detail.component';
import { TaskUserListComponent } from './manage/task-user-list/task-user-list.component';
import { TaskUserDetailComponent } from './manage/task-user-detail/task-user-detail.component';
import { DialogProjectUserComponent } from './manage/dialog-project-user/dialog-project-user.component';
import { DialogTaskUserComponent } from './manage/dialog-task-user/dialog-task-user.component';
import { ProjectHomeComponent } from './manage/project-home/project-home.component';
import {MatDividerModule} from '@angular/material/divider';
import { PayComponent } from './pay/pay/pay.component';
import { TailComponent } from './tail/tail/tail.component';
import { PriceComponent } from './pirce/price/price.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReallyFreshComponent } from './product/really-fresh/really-fresh.component';
import { EbarterComponent } from './product/ebarter/ebarter.component';
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//import { CompanyListComponent } from './user/account-settings/Company/company-list/company-list.component';
//import { CompanyDetailComponent } from './user/account-settings/Company/company-detail/company-detail.component';
//import { UserListComponent } from './user/account-settings/User/user-list/user-list.component';
//import { UserDetailComponent } from './user/account-settings/User/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    UploadProductsComponent,
    EditProductComponent,
    MyReleasedProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    AccountComponent,
    SystemComponent,
    SideBarComponent,
    MaterialComponent,
    FinanceComponent,
    OrderComponent,
    RequestComponent,
    GroupComponent,
    RoleComponent,
    ResetPasswordComponent,
    ManageUserComponent,
    LogAndSecComponent,
    InformationComponent,
    UserDetailComponent,
    InvoicesComponent,
    ShippingComponent,
    AccessComponent,
    PaymentComponent,
    NotificationsComponent,
    MoneyComponent,
    OwnerComponent,
    BusinessComponent,
    ManageHomeComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    TaskListComponent,
    TaskDetailComponent,
    PercentDetailComponent,
    SidebarComponent,
    DialogProjectBlankComponent,
    DialogTaskBlankComponent,
    ProjectUserListComponent,
    ProjectUserDetailComponent,
    TaskUserListComponent,
    TaskUserDetailComponent,
    DialogProjectUserComponent,
    DialogTaskUserComponent,
    ProjectHomeComponent,
    PayComponent,
    PriceComponent,
    TailComponent,
    ReallyFreshComponent,
    EbarterComponent
  //  CompanyListComponent,
    //CompanyDetailComponent,
   // UserListComponent,
   // UserDetailComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatListModule,
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
    
  ],
  
  providers: [StorageService],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent,RegistrationComponent],
})
export class AppModule { }
