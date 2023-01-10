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
      name: 'UGE-LANCER PTE.LTD Şirkətinin Azərbaycan Respublikasındakı Nümayəndəliyi',
      skills: 'Maliyyə meneceri',
      startDate: '2022',
      content: 'Nümayəndəliyin maliyyə-təsərrüfat fəaliyyətinə aid bütün işlər.'
    },
    {
      list: [
        {content: 'Şirkətin maliyyə və vergi siyasətinin hazırlaması'},
        {content: 'Vergi uçotunun təşkili'},
        {content: 'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və verilməsinin təşkili'},
        {
          content: 'Müştərilərlə işin təşkili və hesablaşmaların aparılması',
          children:
          [
            'O cümlədən topdansatış üzrə gündəlik hesablaşmaların təşkili (təxminən 500-dən artıq müəssisə və təşkilat)',
            'SOCAR kartları ilə yanacaq satışı üzrə gündəlik hesablaşmalar  (təxminən 1000-dən artıq müəssisə, təşkilat və fiziki şəxslər)'
          ]
        },
        {content: 'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotu'},
        {content: 'Struktur bölmələrdə (11 Neft Terminal Bazası, 1 Sıxılmış Təbii Qaz Terminalı və 45 Yanacaqdoldurma Məntəqəsi) uçotun təşkili və bu bölmələrlə hesablaşmaların aparılmasına nəzarət'},
        {content: 'Əsaslı tikinti üzrə podratçı təşkilatlarla hesablaşmaların təşkili'},
        {
          content: 'Qanunvericiliyə uyğun olaraq illik inventarizasiyaların təşkili və keçirilməsinə rəhbərlik',
          children: [
            'O cümlədən, 11 Neft Terminal Bazası, 1 Sıxılmış Təbii Qaz Terminalı, 45 Yanacaqdoldurma Məntəqəsi və struktura daxil olan digər bölmələrdə (baş ofis, avtoqaraj və s. ) mal-material qiymətlilərinin inventarizasiyası',
            '1500-dən artıq müştəri ilə hesablaşmaların inventarizasiyası',
            'Malsatan təşkilatlarla hesablaşmalrın inventarizasiyası',
            'Digər balans maddələrinin inventarizasiyası'
          ]
        },
        {content: 'İllik maliyyə hesabatlarının hazırlanması, SOCAR və digər dövlət orqanlarına təqdim edilməsi'},
        {content: 'SOCAR üçün müxtəlif idarəetmə hesabatlarının hazırlanması və təqdim edilməsi (gündəlik, aylıq və s)'},
        {content: 'Rəhbərlik üçün müxtəlif idarəetmə hesabatlarının hazırlanması'},
        {content: 'Beynəlxalq audit təşkilatları tərəfindən maliyyə hesabatlarının illik auditin keçirilməsinin və audit komandasının lazımi məlumatlarla təmin olunmasının təşkili'},
        {content: 'SOCAR, vergi orqanları və digər dövlət orqanları tərəfindən vaxtaşırı keçirilən maliyyə yoxlamaları zamanı müəssisəni təmsil etmək, lazimi məlumat və hesabatların hazırlanması və təqdim edilməsi'},
        {content: 'Müəssisənin illik maliyyə proqnozlarının hazırlanmasında iştirak'},
        {content: 'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası'},
        {content: 'Mühasibat şöbəsində  idarəetmə ilə bağlı digər vəzifələr'}
      ],
      name: 'Socar Petroleum QSC',
      skills: 'Baş Mühasib',
      startDate: '2009',
      endDate: '2022'
    },
    {
      content: 'Maliyyə menecmenti üzrə məsləhət və təlim xidmətləri.',
      skills: 'Ekspert',
      name: 'Azərbaycan Bank tədris Mərkəzi',
      startDate: '2008'
    },
    {
      content: `Maliyyə menecmenti üzrə məsləhət və təlim xidmətləri.`,
      name: 'UM Consultancy MMC',
      skills: 'Ekspert',
      startDate: '2010',
      endDate: '2011'
    },
    {
      list: [
        {content: 'Şirkətin maliyyə və vergi siyasətinin hazırlanması'},
        {content: 'Vergi uçotunun təşkili'},
        {content: 'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və verrilməsi'},
        {content: 'Müştərilərlə işin təşkili və hesablaşmaların aparılması'},
        {content: 'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotu'},
        {content: 'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası'}
      ],
      name: 'Sterlinq Qrup MMC',
      skills: 'Baş Mühasib',
      startDate: '2008',
      endDate: '2009'
    },
    {
      list: [
        {content: 'Filialın mühasibat uçotunun təşkili və aparılmasına rəhbərlik'},
        {content: 'Poçt şöbələrindən həftəlik və aylıq hesabatların alınması və yoxlanılmasına nəzarət'},
        {content: 'Poçt şöbələrində planlı və plandankənar yoxlamaların təşkili və vaxtaşırı yoxlamalarda iştirak'},
        {content: 'Baş İdarəyə həftəlik, aylıq, rüblük və illik hesabatların hazırlanması və təqdim edilməsi'},
        {content: 'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və təqdim olunmasına nəzarət'},
        {content: 'Müştərilərlə işin təşkili və hesablaşmaların aparılmasına nəzarət'},
        {
          content: 'Partnyor təşkilatlarla hesablaşmaların təşkili',
          children: [
            'Aztelekom İB və Bakı Telefon Rabitəsi İB-nin telefon və şəhərlərarası danışıq haqlarının yığılması üzrə hesablaşmalar',
            'Azərcell Telekom MMC-nin mobil telefon haqlarının yığılması üzrə hesablaşmalar',
            'Azərişıq və Azəriqaz İB-lərin kommunal ödnişlərinin yığılması üzrə hesablaşmalar',
            'Pensiya ödənişləri üzrə Dövlər Sosial Təminat İdarələri və əhali ilə hesablaşmalar',
            'Digər sosial ödənişlər üzrə Dövlət Sosial Müdafiə orqanları və əhali ilə hesablaşmalar',
            'Barat ödənişləri üzrə baş İdarə ilə hesablaşmalar',
          ]
        },
        {content: 'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotuna nəzarət'},
        {content: 'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası'},
        {content: 'Mühasibat şöbəsində  idarəetmə ilə bağlı digər vəzifələr'}
      ],
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
      list: [
        {
          content: 'Baş mühasib kimi',
          children: [
            'Bankın maliyyə və vergi siyasətinin hazırlanması',
            'Mühasibat uçotunun təşkili',
            'Vergi hesabatlarının hazırlanması və təqdim edilməsi',
            'Mərkəzi bank üçün hesabatların hazırlanması və təqdim edilməsi',
            'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası',
          ]
        },
        {
          content: 'Mühasib kimi',
          children: [
            'Əməliyyat şöbəsinə rəhbərlik',
            'Kassa əməliyyatlarına nəzarət',
            'Kassanın gündəlik yoxlanılması',
            'Gündəlik maliyyə-təsərrüfat əməliyyatlarının mühasibat proqramında əks olunması',
            'Gündəlik mühasibat balansının hazırlanması',
            'DSMF, statistika və digər Dövlət orqanlarına hesabatların hazırlanması və təqdim edilməsi',
          ]
        }
      ],
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
