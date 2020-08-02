import { Component, OnInit, VERSION, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy {

  clicked: boolean = false;
  title: string = `Angular ${VERSION.full} ist cool!`;

  companies = [
    {
      name: 'Google',
      logoSrc: 'assets/logos/Logo-Google.svg',
      foundingYear: 1998
    },
    {
      name: 'sixData',
      logoSrc: 'assets/logos/Logo-Google.svg',
      foundingYear: 2002
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    // check detection
  }

  ngAfterViewInit() {
    // child views loaded
  }

  ngOnDestroy() {
    // teardown
  }

  handleClick() {
    this.clicked = true;
  }

}
