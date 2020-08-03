import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies = [
    {
      name: 'Google',
      logoSrc: 'assets/logos/Logo-Google.svg',
      foundingYear: 1998
    },
    {
      name: 'sixData',
      logoSrc: 'assets/logos/Logo-sixData.png',
      foundingYear: 2002
    }
  ];

  constructor() {

  }

  getList() {
    return this.companies;
  }
}
