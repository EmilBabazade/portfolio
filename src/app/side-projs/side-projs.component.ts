import { Component, OnInit } from '@angular/core';
import { AllTextService } from '../all-text.service';
import { IContentBox } from '../IContentBox';

const dataAz: IContentBox[] = [
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

const dataRus: IContentBox[] = [
  {
    content: `Высшее образование, Красный диплом.`,
    name: 'Азербайджанская Государственная Нефтяная Академия',
    startDate: '1991',
    endDate: '1996',
    fileUrl: 'Diplom.pdf'
  },
  {
    content: `Курс Международных Финансовых Отчетов`,
    name: 'Профессиональные Образовательные Услуги "Артур Андерсон"',
    onlyDate: '1999',
    fileUrl: 'arthur_anderssen.pdf'
  },
  {
    content: `Разные Сертификаты по МСФО.`,
    name: 'Азербайджанский Банковский Учебный Центр',
    onlyDate: '2001',
    fileUrl: 'diplom_bank.pdf'
  },
  {
    content: 'Диплом Международных Стандартов Финансовых Отчетов  ((DipİFR Russian N 1816631).',
    name: 'ACCA',
    onlyDate: '2013',
    fileUrl: 'DipIFR.pdf'
  },
  {
    content: 'СЕРТИФИКАТ ПРОФЕССИОНАЛЬНОГО БУХГАЛТЕРА по международным финансовым стандартам PMS N 0000079.',
    name: 'Государственный Экзаменационный Центр',
    onlyDate: '2022',
    fileUrl: 'Sertifikat.pdf'
  },
  {
    content: 'Член Общественного Объединения Азербайджана "Ассоциации Профессиональных Финансовых Менеджеров".',
    name: 'APFM',
    fileUrl: 'APFM.pdf',
    onlyDate: '2022'
  },
];

@Component({
  selector: 'app-side-projs',
  templateUrl: './side-projs.component.html',
  styleUrls: ['./side-projs.component.css']
})
export class SideProjsComponent implements OnInit {
  data: IContentBox[] = dataAz;

  constructor(private allTextService: AllTextService) { }

  ngOnInit(): void {
    this.allTextService.lang$.subscribe(lang => {
      if(lang === 'rus') this.data = dataRus;
      else this.data = dataAz;
    });
  }

}
