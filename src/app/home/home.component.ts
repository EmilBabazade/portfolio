import { Component, OnInit } from '@angular/core';
import { AllTextService } from '../all-text.service';
import { HomeText } from '../allText';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text?: HomeText;

  constructor(private allTextService: AllTextService) { }

  ngOnInit(): void {
    this.text = this.allTextService.getAllText('rus').home;
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/cv.docx');
    link.setAttribute('download', `cv.docx`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
