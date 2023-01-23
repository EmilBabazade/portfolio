import { Component, OnInit } from '@angular/core';
import { AllTextService } from './all-text.service';
import { AppText } from './allText';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text?: AppText;

  constructor(private allTextService: AllTextService) {

  }

  ngOnInit(): void {
    this.text = this.allTextService.getAllText('rus').app;
  }
}
