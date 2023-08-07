import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllTextService } from './all-text.service';
import { AppText } from './allText';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text?: AppText;
  isAz = true;
  isRus = false;

  constructor(private allTextService: AllTextService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const lang = params['lang'];
        if(lang === 'az') {
          this.isAz = true;
          this.isRus = false;
          this.selectLang('az');
        }
        if(lang === 'rus') {
          this.isAz = false;
          this.isRus = true;
          this.selectLang('rus');
        }
      }
    );
    this.allTextService.lang$.subscribe(l => {
      this.text = this.allTextService.getAllText(l).app;
    });
  }

  selectLang(lang: string) {
    this.allTextService.setLang(lang);
  }
}
