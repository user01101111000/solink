export enum LinkField {
  LABEL = "label",
  URL = "url",
}

export interface IAllInputValues {
  avatar: File | string;
  location: string;
  about: string;
  fullName: string;
  links: Link[];
}

export interface Link {
  label: string;
  url: string;
}

export interface User {
  file: string;
  fullName: string;
  location: string;
  about: string;
  links: Link[];
}
