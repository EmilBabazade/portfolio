export interface AllText {
  app: AppText,
  contentBox: ContentBoxText,
  contact: ContactText,
  home: HomeText
}

export interface AppText {
  tab1: string,
  tab2: string,
  tab3: string,
  tab4: string,
  tab5: string,
}

export interface ContentBoxText {
  untilNow: string,
  roles: string
}

export interface ContactText {
  heading: string
}

export interface HomeText {
  heading: string,
  details: string[],
  skillsHeading: string,
  skills: string[],
  languagesHeading: string,
  languages: string[],
  cvButton: string
}
