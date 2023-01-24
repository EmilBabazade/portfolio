import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllTextService } from '../all-text.service';
import { HomeText } from '../allText';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text?: HomeText;

  constructor(private allTextService: AllTextService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allTextService.lang$.subscribe(l => {
      this.text = this.allTextService.getAllText(l).home;
    });
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/cv.pdf');
    link.setAttribute('download', `cv.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
