import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: ':id',
        component: CompanyDetailComponent
      }
    ]
  },
  {
    path: 'companiess',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
