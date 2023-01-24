import { Component, OnInit } from '@angular/core';
import { AllTextService } from '../all-text.service';
import { IContentBox } from '../IContentBox';

const dataAz: IContentBox[] = [
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
    content: 'Mühasibat uçotu üzrə məsləhət və təlim xidmətləri.',
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

const dataRus: IContentBox[] = [
  {
    name: 'Представительство "UGE-LANCER PTE.LTD " в Азербайджанской Республике',
    skills: 'Финансовый мененджер',
    startDate: '2022',
    content: 'Вся работа, связанная с финансово-хозяйственной деятельностью Представительства.'
  },
  {
    list: [
      {content: 'Разработка финансовой и налоговой политики Представительства'},
      {content: 'Организация налогового учета в Представительстве'},
      {content: 'Организация подготовки и сдачи налоговой отчетности, отчетов обязательных страховых отчислений, статистических отчетов и других отчетов в государственные органы'},
      {
        content: 'Организация работы и взаиморасчетов с клиентами',
        children:
        [
          'В том числе организация ежедневных расчетов по оптовым продажам  (более 500 предприятий и организаций)',
          'Оpганизация ежедневных  расчетов по продажу топлива посредством карт SOCAR (более 1000 предприятий, организаций и частных лиц)'
        ]
      },
      {content: 'Ежедневный учет финансово-хозяйственных операций'},
      {content: 'Организация учета в структурных подразделениях (11 нефтебаз, 1 терминал сжатого природного газа и 45 АЗС) и контроль взаиморасчетов с этими подразделениями'},
      {content: 'Организация взаиморасчетов с подрядными организациями по капитальному строительству'},
      {
        content: 'Организация и руководство за проведением ежегодной инвентаризации активов и обязательств представительства в соответствии с законодательством страны',
        children: [
          'В том числе,  11 Нефтебаз, 1 терминал сжатого природного газа, 45 АЗС и другие объекты, входящие в состав предприятии  (головной офис, гараж и т. д.)',
          'Инвентаризация взаиморасчетов с более чем 1500 клиентами',
          'Инвентаризация взаиморасчетов с поставщикоми',
          'Инвентаризация прочих статей баланса'
        ]
      },
      {content: 'Подготовка годовых финансовых отчетов, представление их  в SOCAR и в другие государственные органы'},
      {content: 'Подготовка и представление  в SOCAR различных управленческих отчетов (ежедневных, ежемесячных и.т.д.) '},
      {content: 'Подготовка различных управленческих отчетов для руководства'},
      {content: 'Организация ежегодного аудита финансовой отчетности предприятия международными аудиторскими организациями и предоставление необходимой информации аудиторской группе'},
      {content: 'Представление Представительства, подготовка и представления необходимой информации и отчетов  при периодических финансовых проверках со стороны SOCAR, налоговых и других государственных органов'},
      {content: 'Участие в подготовке годовых финансовых прогнозов Представительства'},
      {content: 'Выполнение иных функций, связанных с организацией бухгалтерского учета'},
      {content: 'Другие должностные функции по управлению бухгалтерского подразделения'}
    ],
    name: 'ЗАО «Socar Petroleum»',
    skills: 'Главный бухгалтер',
    startDate: '2009',
    endDate: '2022'
  },
  {
    content: 'Консультационные услуги и услуги обучения по бухгалтерскому учету.',
    skills: 'Эксперт',
    name: 'Азербайджанский Банковский Учебный Центр',
    startDate: '2008'
  },
  {
    content: `Консультационные услуги и услуги обучения в области управления финансами.`,
    name: 'ООО "UM Consultancy"',
    skills: 'Эксперт',
    startDate: '2010',
    endDate: '2011'
  },
  {
    list: [
      {content: 'Разработка финансовой и налоговой политики Компании'},
      {content: 'Организация налогового учета в Компании'},
      {content: 'Организация подготовки и сдачи налоговой отчетности, отчетов обязательных страховых отчислений, статистических отчетов и других отчетов в государственные органы'},
      {content: 'Организация работы с клиентами и ведение взаиморасчетов с ними'},
      {content: 'Ежедневный учет финансово-хозяйственных операций'},
      {content: 'Другие функции по организации финансового учета'}
    ],
    name: 'ООО "Sterlinq Qrup"',
    skills: 'Главный бухгалтер',
    startDate: '2008',
    endDate: '2009'
  },
  {
    list: [
      {content: 'Организация и руководство ведениея бухгалтерии учета предприятия'},
      {content: 'Контроль за принятием и проверки еженедельных и ежемесячных отчетов почтовых отделений'},
      {content: 'Организация плановых и внеплановых проверок в почтовых отделениях и участие в периодических проверках'},
      {content: 'Подготовка и сдача еженедельных, ежемесячных, квартальных и годовых отчетов в головной офис'},
      {content: 'Организация подготовки и сдачи налоговой отчетности, отчетов обязательных страховых отчислений, статистических отчетов и других отчетов в государственные органы'},
      {content: 'Организация работы с клиентами и контроль взаиморасчетов с ними'},
      {
        content: 'Организация взаиморасчетов с партнерскими организациями',
        children: [
          'Расчеты по взиманию платы за телефонную и междугородную связь ПО "Азтелеком" и ПО "Бакинская телефонная связь"',
          'Расчеты по взиманию платы за мобильную связь с ООО Azercell Telecom',
          'Расчеты по сбору коммунальных платежей ПО "Azərişıq" и "Azəriqaz"',
          'Расчеты с органами социальной защиты населения и населением по  выплатам пенсий',
          'Расчеты с органами государственной социальной защиты и населением по другим социальным выплатам',
          'Расчеты с головным офисом по денежным переводом',
        ]
      },
      {content: 'Kонтроль учета ежедневных финансово-хозяйственных операций'},
      {content: 'Другие функции по организации финансового учета'},
      {content: 'Другие должностные функции по управлению бухгалтерского подразделения'}
    ],
    name: 'Государственное Предприятие "AzərPoçt"',
    skills: 'Главный бухгалтер',
    startDate: '2001',
    endDate: '2008'
  },
  {
    content: `Подготовка финансовой и налоговой политики компании, бухгалтерский учет
    связанные с организацией и проведением финансового управления
    выполнение всех функций.`,
    name: 'Производственное Объединение "Азтелеком"',
    skills: 'Бухгалтер',
    startDate: '2001',
    endDate: '2001'
  },
  {
    list: [
      {
        content: 'Главный бухгалтер',
        children: [
          'Подготовка финансовой и налоговой политики банка',
          'Организация бухгалтерского учета в банке',
          'Подготовка и представление налоговых отчетностей',
          'Подготовка и представление отчетов в Центральный Банк страны',
          'Выполнение иных функций, связанных с организацией финансового учета',
        ]
      },
      {
        content: 'Бухгалтер',
        children: [
          'Руководство операционным отделом',
          'Контроль кассовых операций',
          'Ежедневная проверка кассы банка',
          'Отражение ежедневных финансово-хозяйственных операций в бухгалтерской программе',
          'Составление ежедневного бухгалтерского баланса',
          'Организация подготовки и сдачи налоговой отчетности, отчетов обязательных страховых отчислений, статистических отчетов и других отчетов в государственные органы',
        ]
      }
    ],
    name: 'Акционерное Обшество "Kaspianbank"',
    skills: 'Бухгалтер, Главный бухгалтер',
    startDate: '1997',
    endDate: '2001'
  },
];

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  data: IContentBox[] = dataAz;

  constructor(private allTextService: AllTextService) { }

  ngOnInit(): void {
    this.allTextService.lang$.subscribe(lang => {
      if(lang === 'rus') this.data = dataRus;
      else this.data = dataAz;
    });
  }

}
