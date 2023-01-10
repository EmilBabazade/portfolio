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
      content: `Ali təhsil, fərqlənmə diplomu.`,
      name: 'Azərbaycan Dövlət Neft Akademiyası',
      startDate: '1991',
      endDate: '1996',
      fileUrl: 'Diplom.pdf'
    },
    {
      content: `Beynəlxalq maliyyə hesabatları kursu, sertifikat`,
      name: 'Arthur Anderson Peşəkar Təhsil Xidmətləri',
      onlyDate: '1999',
      fileUrl: 'arthur_anderssen.pdf'
    },
    {
      content: `BMUS üzrə müxtəlif sertifikatlar.`,
      name: 'Azərbaycan Bank Tədris Mərkəzi',
      onlyDate: '2001',
      fileUrl: 'diplom_bank.pdf'
    },
    {
      content: 'Beynəlxalq Maliyyə hesabatları Diplomu ((DipİFR Russian N 1816631).',
      name: 'ACCA',
      onlyDate: '2013',
      fileUrl: 'DipIFR.pdf'
    },
    {
      content: 'Beynəlxalq Maliyyə Standartları üzrə PEŞƏKAR MÜHASİB SERTİFİKATI PMS N 0000079.',
      name: 'Dövlət İmtahan Mərkəzi',
      onlyDate: '2022',
      fileUrl: 'Sertifikat.pdf'
    },
    {
      content: 'Azərbaycan Professional Maliyyə Menecerləri Assosiasiyası İctimai Birliyinin üzvü.',
      name: 'APFM',
      fileUrl: 'APFM.pdf',
      onlyDate: '2022'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
