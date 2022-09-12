import { Component, OnInit } from '@angular/core';
import { IContentBox } from '../IContentBox';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  data: IContentBox[] = [
    {
      content: `I have created full-stack sites mainly related to order management in logistics ( orders, train wagons,
        containers, order documents, i.e. lot of tables and lot of forms ). Here is one of the sites I have built ( not
        100% me but i have worked most of the front-end and back-end and database ): http://cb.absheronport.az/
        . It is a logistics site, as I explained above. I have also worked on another site for making loan application
        forms that U.S. banks require (https://app.neatfinancials.com/ ). I have worked on 3-4 other sites but most
        of them are just logistics sites that are very similar to each other. I can show you an example in a meeting
        or something.`,
      name: 'UNISER',
      skills: '.NET, Angular, JQuery, TSQL, GIT',
      endDate: '31/08/2022',
      startDate: '31/07/2021'
    },
    {
      content: `Writing APIs with .Net core, writing front-end with Angular, and managing SqlServer database. I worked on
      one project here ( as the company had only one site ). The site was about shipping packages from Turkey to
      Azerbaijan, so it was mainly about tracking packages, managing warehouses, and etc. You can see the site
      here: http://www.cargo.az`,
      name: 'EK EXPRESS',
      skills: '.NET, Angular, JQuery, TSQL, GIT',
      endDate: '30/06/2021',
      startDate: '01/06/2020'
    },
    {
      content: `General back-end and database development with ABAP ( a unique language to SAP). Most of my work was
      creating Odata services between front-end and the tables on the database so data could be received by
      front-end ( there is also some SQL and OpenSql used in order to recieve data from tables )`,
      name: 'ACCENTURE LATVIA',
      skills: 'ABAP, OpenSQL, GIT, Agile, Scrum',
      endDate: '14/04/2020',
      startDate: '14/04/2019'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
