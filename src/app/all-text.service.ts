import { Injectable } from '@angular/core';
import { AllText } from './allText';

const textAZ: AllText = {
  app: {
    tab1: "Ümumi",
    tab2: "Təcrübə",
    tab3: "Təhsil və Sertifikatlar",
    tab4: "Əlaqə",
  },
  contentBox: {
    untilNow: "Hal Hazıradək",
    roles: "Vəzifələr",
  },
  contact: {
    heading: "Əlaqə",
  },
  home: {
    heading: "Salam, Mən İslam Babayevəm.",
    details: [
      `25 il iş təcrübəsi olan bir mühasibəm. Bank, xidmət, rabitə, tikinti, satış, neft sektorlarında uzunmüddətli iş
      təcrübəm var. İstehsal, satış və digər sahələrdə konsaltinq xidmətləri göstərirəm. Müəssisələrdə Azərbaycan
      Respublikası qanunvericiliyinə uyğun olaraq vergi uçotunun və Beynəlxalq Mühasibat Uçotu Standartlarına uyğun
      olaraq maliyyə uçotunun qurulmasında və aparılmasında kifayət qədər təcrübəm var. Hal-hazırda neft hasilatı ilə
      məşgul olan bir şirkətdə maliyyə meneceri işləyirəm.`,
      `Mühasibat uçotunun tədrisi sahəsində kifayət qədər təcrübəm var. Bu sahədə bir neçə layihədə iştirak etmişəm və
      hal-hazırda bu işlə fərdi məşğulam. (Azərbaycan dilində F3 layihəsi, ABTC tərəfindən tədris olunan “Ümumi bank
      işi” tədris layihəsinə daxil olan “Bank işinin komputerdə simulyasiyası” layihəsi, yeni başlayanlar üçün mühasibat
      uçotunun tədrisi və s.) Azərbaycan Bank Tədris Mərkəzinin ekspertiyəm.`,
      `Fliranser kimi mühasibat uçotunun autsorsinq prinsipi ilə aparılması üzrə fəaliyyət göstərirəm. (VÖEN 2001280922).
      “Creative Consultinq” konsaltinq şirkəti ilə əməkdaşlıq edirəm.`,
      `Müəssisələrdə maliyyə proqnozlaşdırılması üzrə komandada iş təcrübəm var. İllik və aylıq gəlir-xərc büdcələrinin
      proqnozlaşdırılması, balans proqnozlaşdırılması, pul vəsaitlərinin hərəkəti( birbaşa və dolayı metodlarla)
      hesabatlarının proqnozlaşdırılması, il ərzində büdcənin yerinə yetirilməsinə nəzarət, təhlil və büdcəyə müvafiq
      korreksiyaların edilməsinin praktikada tətbiqi ilə bağlı təcrübəyə malikəm.`,
    ],
    skillsHeading: "Əsas Bacarıqlar",
    skills: [
      "MS Word",
      "MS Excel",
      "MS Power Point",
      "MS Outlook",
      "Günəş maliyyə proqramı",
      "Maliyyə menecmenti",
      "Beynalaxalq Maliyyə",
      "Hesabatları Standardları"
    ],
    languagesHeading: "Dil Bacarıqları",
    languages: [
      "Azərbaycan dili",
      "Rus dili",
      "Türk dili",
      "Ingilis dili"
    ],
    cvButton: "CV"
  }
};

const textRUS: AllText = {
  app: {
    tab1: "Обший",
    tab2: "Опыт работы",
    tab3: "Учеба и сертификаты",
    tab4: "Контакты",
  },
  contentBox: {
    untilNow: "До настоящего времени",
    roles: "Должность",
  },
  contact: {
    heading: "Контакты",
  },
  home: {
    heading: "Здраствуйте, Я Ислам Бабаев",
    details: [
      `Я бухгалтер с 25-летним стажем.  Имею многолетний опыт
      работы в банковском, сервисном, коммуникационном,
      строительном, торговом и нефтяном секторах. Оказываю
      консультационные услуги в сфере производства, продаж и
      других сферах. Имею достаточный опыт организации и ведения
      налогового учета и финансового учета в соответствии с
      Международными стандартами бухгалтерского учета на
      предприятиях в соответствии с законодательством
      Азербайджанской Республики.В настоящее время я работаю
      финансовым менеджером в компании, занимающейся добычей
      нефти.`,
      `Имею большой опыт преподавания бухгалтерского учета.
      Я участвовал в нескольких проектах в этой области и в
      настоящее время занимаюсь этой работой индивидуально.
      Являюсь экспертом Азербайджанского Банковского Учебного
      Центра.  Сотрудничаю с консалтинговой компанией
      "Creative Consulting".`,
      `Имею опыт работы в группе финансового прогнозирования на
      предприятиях в том числе прогнозирования годовых и месячных
      бюджетов доходов-расходов, прогнозирования баланса,
      прогнозирования отчетов о движении денежных средств
      (прямых и косвенных методов), контроль исполнения бюджета в течение года,
      анализ и практическое применения внесения соответствующих
      корректировок в бюджет.`,
    ],
    skillsHeading: "Основные навыки",
    skills: [
      "MS Word",
      "MS Excel",
      "MS Power Point",
      "MS Outlook",
      `Бухгалтерская программа "Günəş"`,
      "Финансовый менеджмент",
      "Международные стандарты финансовой отчётности",
      "(МСФО)"
    ],
    languagesHeading: "Языковые навыки",
    languages: [
      "Азербайджанский",
      "Русский",
      "Турецкий",
      "Английский"
    ],
    cvButton: "CV"
  }
};


@Injectable({
  providedIn: 'root'
})
export class AllTextService {

  constructor() { }

  getAllText(lang?: string): AllText {
    if(lang === 'rus') return textRUS;
    return textAZ;
  }
}
