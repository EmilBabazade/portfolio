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
      name: 'UGE-LANCER PTE.LTD Şirkətinin Azərbaycan respublikasındakı Nümayəndəliyi',
      skills: 'Maliyyə meneceri',
      startDate: '2022',
      content: 'Nümayəndəliyin maliyyə-təsərrüfat fəaliyyətinə aid bütün işlər.'
    },
    {
      list: [
        'Şirkətin maliyyə və vergi siyasətinin hazırlaması',
        'Vergi uçotunun təşkili',
        'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və verilməsinin təşkili',
        'Müştərilərlə işin təşkili və hesablaşmaların aparılması',
        'SOCAR kartları ilə yanacaq satışı üzrə gündəlik hesablaşmalar  (təxminən 1000-dən artıq müəssisə, təşkilat və fiziki şəxslər)',
        'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotu',
        'Struktur bölmələrdə (11 Neft Terminal Bazası, 1 Sıxılmış Təbii Qaz Terminalı və 45 Yanacaqdoldurma Məntəqəsi) uçotun təşkili və bu bölmələrlə hesablaşmaların aparılmasına nəzarət',
        'Əsaslı tikinti üzrə podratçı təşkilatlarla hesablaşmaların təşkili',
        'Qanunvericiliyə uyğun olaraq illik inventarizasiyaların təşkili və keçirilməsinə rəhbərlik',
        '1500-dən artıq müştəri ilə hesablaşmaların inventarizasiyası',
        'Malsatan təşkilatlarla hesablaşmalrın inventarizasiyası',
        'Digər balans maddələrinin inventarizasiyası',
        'İllik maliyyə hesabatlarının hazırlanması, SOCAR və digər dövlət orqanlarına təqdim edilməsi',
        'SOCAR üçün müxtəlif idarəetmə hesabatlarının hazırlanması və təqdim edilməsi (gündəlik, aylıq və s)',
        'Rəhbərlik üçün müxtəlif idarəetmə hesabatlarının hazırlanması',
        'Beynəlxalq audit təşkilatları tərəfindən maliyyə hesabatlarının illik auditin keçirilməsinin və audit komandasının lazımi məlumatlarla təmin olunmasının təşkili',
        'SOCAR, vergi orqanları və digər dövlət orqanları tərəfindən vaxtaşırı keçirilən maliyyə yoxlamaları zamanı müəssisəni təmsil etmək, lazimi məlumat və hesabatların hazırlanması və təqdim edilməsi',
        'Müəssisənin illik maliyyə proqnozlarının hazırlanmasında iştirak',
        'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası',
        'Mühasibat şöbəsində  idarəetmə ilə bağlı digər vəzifələr'
      ],
      name: 'Socar Petroleum QSC',
      skills: 'Baş Mühasib',
      startDate: '2009'
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
        'Şirkətin maliyyə və vergi siyasətinin hazırlanması',
        'Vergi uçotunun təşkili',
        'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və verrilməsi',
        'Müştərilərlə işin təşkili və hesablaşmaların aparılması',
        'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotu',
        'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası'
      ],
      name: 'Sterlinq Qrup MMC',
      skills: 'Baş Mühasib',
      startDate: '2008',
      endDate: '2009'
    },
    {
      list: [
        'Filialın mühasibat uçotunun təşkili və aparılmasına rəhbərlik',
        'Poçt şöbələrindən həftəlik və aylıq hesabatların alınması və yoxlanılmasına nəzarət',
        'Poçt şöbələrində planlı və plandankənar yoxlamaların təşkili və vaxtaşırı yoxlamalarda iştirak',
        'Baş İdarəyə hətəlik',
        'Aylıq, rüblük və illik hesabatların hazırlanması və təqdim edilməsi',
        'Dövlət orqanlarına vergi, DSMF, statistika və s. hesabatların hazırlanması və təqdim olunmasına nəzarət',
        'Müştərilərlə işin təşkili və hesablaşmaların aparılmasına nəzarət',
        'Partnyor təşkilatlarla hesablaşmaların təşkili',
        'Aztelekom İB və Bakı Telefon Rabitəsi İB-nin telefon və şəhərlərarası danışıq haqlarının yığılması üzrə hesablaşmalar',
        'Azərcell Telekom MMC-nin mobil telefon haqlarının yığılması üzrə hesablaşmalar',
        'Azərişıq və Azəriqaz İB-lərin kommunal ödnişlərinin yığılması üzrə hesablaşmalar',
        'Pensiya ödənişləri üzrə Dövlər Sosial Təminat İdarələri və əhali ilə hesablaşmalar',
        'Digər sosial ödənişlər üzrə Dövlət Sosial Müdafiə orqanları və əhali ilə hesablaşmalar',
        'Barat ödənişləri üzrə baş İdarə ilə hesablaşmalar',
        'Gündəlik maliyyə-təsərrüfat əməliyyatlarının uçotuna nəzarət',
        'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası',
        'Mühasibat şöbəsində  idarəetmə ilə bağlı digər vəzifələr'
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
        'Əməliyyat şöbəsinə rəhbərlik',
        'Kassa əməliyyatlarına nəzarət',
        'Kassanın gündəlik yoxlanılması',
        'Gündəlik maliyyə-təsərrüfat əməliyyatlarının mühasibat proqramında əks olunması',
        'Gündəlik mühasibat balansının hazırlanması',
        'DSMF',
        'Statistika və digər Dövlət orqanlarına hesabatların hazırlanması və təqdim edilməsi',
        'Bankın maliyyə və vergi siyasətinin hazırlanması',
        'Mühasibat uçotunun təşkili',
        'Vergi hesabatlarının hazırlanması və təqdim edilməsi',
        'Mərkəzi bank üçün hesabatların hazırlanması və təqdim edilməsi',
        'Maliyyə uçotunun təşkilinə aid olan digər funksiyaların icrası',
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
