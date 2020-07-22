import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MagnifierDirective } from './magnifier.directive';
import { YearPipe } from './year.pipe';
import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MagnifierDirective,
    YearPipe,
    CompanyComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
