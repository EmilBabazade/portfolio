import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllTextService } from '../all-text.service';
import { ContactText } from '../allText';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  text?: ContactText;

  constructor(private allTextService: AllTextService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allTextService.lang$.subscribe(l => {
      this.text = this.allTextService.getAllText(l).contact;
    });
  }
}
