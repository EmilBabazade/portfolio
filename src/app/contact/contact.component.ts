import { Component, OnInit } from '@angular/core';
import { AllTextService } from '../all-text.service';
import { ContactText } from '../allText';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  text?: ContactText;

  constructor(private allTextService: AllTextService) { }

  ngOnInit(): void {
    this.text = this.allTextService.getAllText('rus').contact;
  }

}
