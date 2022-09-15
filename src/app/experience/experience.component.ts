import { Component, OnInit } from '@angular/core';
import { IContentBox } from '../IContentBox';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  data: IContentBox[] = [
    {
      content: `Şirkətin maliyyə və vergi siyasətinin hazırlaması, uçotun
      təşkili və aparılması, maliyyə idarəetmənin təşkili aid olan
      bütün funksiyaların aparılması.`,
      name: 'Socar Petroleum QSC',
      skills: 'Baş Mühasib',
      startDate: '2009'
    },
    {
      content: `Maliyyə menecmenti üzrə məsləhət və təlim xidmətləri.`,
      name: 'UM Consultancy MMC',
      skills: 'Ekspert',
      startDate: '2010',
      endDate: '2011'
    },
    {
      content: `Şirkətin maliyyə və vergi siyasətinin hazırlaması, uçotun
      təşkili və aparılması, maliyyə idarəetmənin təşkili aid olan
      bütün funksiyaların aparılması.`,
      name: 'Sterlinq Qrup MMC',
      skills: 'Baş Mühasib',
      startDate: '2008',
      endDate: '2009'
    },
    {
      content: `Şirkətin maliyyə və vergi siyasətinin hazırlaması, uçotun
      təşkili və aparılması, maliyyə idarəetmənin təşkili aid olan
      bütün funksiyaların aparılması.`,
      name: 'AzərPoçt DM',
      skills: 'Baş Mühasib',
      startDate: '2001',
      endDate: '2008'
    },
    {
      content: `Şirkətin maliyyə və vergi siyasətinin hazırlaması, uçotun
      təşkili və aparılması, maliyyə idarəetmənin təşkili aid olan
      bütün funksiyaların aparılması.`,
      name: 'Aztelekom İstehsalat Birliyi',
      skills: 'Mühasib',
      startDate: '2001',
      endDate: '2001'
    },
    {
      content: `Şirkətin maliyyə və vergi siyasətinin hazırlaması, uçotun
      təşkili və aparılması, maliyyə idarəetmənin təşkili aid olan
      bütün funksiyaların aparılması.`,
      name: 'Kaspianbank Səhmdar Bankı',
      skills: 'Mühasib, Baş Mühasib',
      startDate: '1997',
      endDate: '2001'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
