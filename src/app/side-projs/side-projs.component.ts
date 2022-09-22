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
      content: `A simple todo app where you can sign in/up, see a list of todos, create new todos, edit todos, and delete them. Built using
        Laravel MVC and MySQL.`,
      name: 'TODO APP',
      skills: 'PHP, Laravel, MySQL',
      source: 'https://github.com/EmilBabazade/laravel_todo'
    },
    {
      content: `Simple billing API written using .Net 6, Entity framework core, and Mediatr. The database is mysql but it is
      codefirst so it doesn't matter that much. Normally i would use Microsoft sql server but since this is just a
      side project i just used mysql.`,
      name: 'BILLING API',
      skills: '.NET, SQLite, GIT',
      source: 'https://github.com/EmilBabazade/BillingAPI',
      url: 'https://billingapi1.herokuapp.com/swagger/index.html'
    },
    {
      content: `A simple api for creating and editing Todo lists ( for different users ). Made using .Net 6, MediatR CQRS, and
      SQLite. I have also written some unit tests ( it does not cover everything though ).`,
      name: 'TODO API',
      skills: '.NET, SQLite, GIT',
      source: 'https://todoapi4.herokuapp.com/swagger/index.html',
      url: 'https://github.com/EmilBabazade/TodoAPI'
    },
    {
      content: `A simple todo app, where you login, signup, see list of todos, edit them, etc. Built using Angular 12 and Clarity Design ( an angular library https://clarity.design/ ).
      It uses the TODO API (the one above - https://todoapi4.herokuapp.com/swagger/index.html)`,
      name: 'TODO APP',
      skills: 'Angular',
      source: 'https://github.com/EmilBabazade/TodoAPP',
      url: 'https://todo-app-emil.herokuapp.com/'
    },
    {
      content: `CRM website for a logistics company in Azerbaijan (https://absheronport.az/en). It is a website for clients of the company to manage their orders. They can set which container or wagon goes to where, rent new containers or wagons with payment and etc.`,
      name: 'ABSHERON LOGISTICS CRM',
      skills: '.NET, Angular, SqlServer, GIT',
      url: 'http://cb.absheronport.az/'
    },
    {
      content: `This is a website for filling loan forms for USA Banks. It is written for a company in USA. The goal of the website is to make it possible to create bank loan forms for everyday people without having to go to a bank.`,
      name: 'NEAT FINANCE',
      skills: '.NET, Angular, SqlServer, GIT',
      url: 'https://app.neatfinancials.com/'
    },
    {
      content: `This is a website for automatically registering gas and electricity counters for the biggest railroad company in Azerbaijan (https://ady.az/). The company has many warehouses, building, etc. so they wanted a simple way to manage their bills. This website is for managing the data, the actual program for inputting the counter data is a mobile app ( i have only written the api for that app).`,
      name: 'ADY COUNTER',
      skills: '.NET, Angular, SqlServer, GIT',
      url: 'http://89.147.203.83:1003/'
    },
    {
      content: `This is a website for managing trucks passing from customs for the biggest railroad company in Azerbaijan (https://ady.az/). Since the company is very big they have a lot of trucks coming from different countries and the recent changes in customs laws made passing those trucks from customs very time consuming - each truck would stay in customs for a day or two. This website automates that process so that process only takes 15 minutes.`,
      name: 'ADY REYSTER',
      skills: '.NET, Angular, SqlServer, GIT',
      url: 'http://89.147.203.83:1005/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
