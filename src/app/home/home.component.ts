import { Component, OnInit, VERSION, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy {
  clicked: boolean = false;
  title: string = `Angular ${VERSION.full} ist cool!`;

  companies = [
    {
      name: 'Google',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      foundingYear: 1998
    },
    {
      name: 'sxiData',
      logoSrc: 'https://www.sixdata.de/wp-content/themes/sixdata/img/sixData.png',
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
