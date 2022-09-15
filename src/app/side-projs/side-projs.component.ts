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
      content: `Bakalavr diplomu.`,
      name: 'Azərbaycan Dövlət Neft Akademiyası',
      startDate: '1991',
      endDate: '1996',
      fileUrl: 'Diplom.pdf'
    },
    {
      content: 'Azərbaycan Professional Maliyyə Menecerləri Assosiasiyası İctimai Birliyinin 2022-ci il üzrə üzvü.',
      name: 'APFM',
      fileUrl: 'APFM.pdf',
      onlyDate: '2022'
    },
    {
      content: 'ACCA maliyyə diplomu.',
      name: 'ACCA',
      onlyDate: '2013',
      fileUrl: 'DipIFR.pdf'
    },
    {
      content: 'Maliyyə Hesabatlarının Beynalxaq Standartları üzrə peşəkar mühasib sertifikatı.',
      name: 'Azərbaycan Respublikasinin Dövlət İmtahan Mərkəzi',
      onlyDate: '2022',
      fileUrl: 'Sertifikat.pdf'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
