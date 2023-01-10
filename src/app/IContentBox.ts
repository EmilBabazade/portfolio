export interface IContentBox {
  name: string;
  skills?: string;
  startDate?: string;
  endDate?: string;
  onlyDate?: string;
  content?: string;
  source?: string;
  url?: string;
  fileUrl?: string;
  list?: IListItemWithChild[];
}

export interface IListItemWithChild {
  content: string,
  children?: string[]
}
