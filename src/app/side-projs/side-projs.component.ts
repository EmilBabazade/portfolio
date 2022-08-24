import { Component, OnInit } from '@angular/core';
import { IContentBox } from '../IContentBox';

@Component({
  selector: 'app-side-projs',
  templateUrl: './side-projs.component.html',
  styleUrls: ['./side-projs.component.css']
})
export class SideProjsComponent implements OnInit {
  data: IContentBox[] = [
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, Angular, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
