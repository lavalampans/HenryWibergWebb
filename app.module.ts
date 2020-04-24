//--Standard
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//--Routes
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//--Fonts
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//--MyComponents
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { UserProductComponent } from './user-product/user-product.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DisplayUserComponent } from './admin/display/display-user.component';
import { UserDetailsComponent } from './admin/details/user-details.component';
//--AngularCLI
import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//--Services
import { CustomersService } from './core/customers.service';
import { ContactService } from './contact/contact.service';
//--Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularFire2/database';
import { environment } from '../environments/environment';
//--Core
import { CoreModule } from './core/core.module';
//UI
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
//Forms
import { FormsModule} from '@angular/forms';
//pipe
/* import { adminFilterPipe} from './admin/admin-filter.pipe'; */

const appRoutes: Routes = [
    { path: 'contact',component: ContactComponent},
    { path: 'product', component: UserProductComponent},
    { path: 'index', component: IndexComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'admin/:id', component: UserDetailsComponent},
    { path: '', redirectTo: '/index', pathMatch: 'full'},
    { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    ErrorComponent,
    UserProductComponent,
    AdminComponent,
    LoadingSpinnerComponent,
    DisplayUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase, 'HenryWiberg'),
    AngularFireDatabaseModule,
    CoreModule,
    FormsModule
  ],
  providers: [ContactService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
