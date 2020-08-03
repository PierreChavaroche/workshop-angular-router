import { Component, OnInit, VERSION, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';
import { CompanyService } from '../shared/company/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy {
  clicked: boolean = false;
  title: string = `Angular ${VERSION.full} ist cool!`;
  companies;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companies = this.companyService.getList();
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
