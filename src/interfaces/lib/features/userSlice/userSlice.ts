export interface ILinkInfo {
  email: string;
  id: string;
  username: string;
  idToken: string;
  fullName: string;
  avatar: string;
  location: string;
  about: string;
  links: {
    label: string;
    url: string;
  }[];
  generated: string;
}

export interface IUserInfoFirebase {
  name?: string;
  createTime?: string;
  updateTime?: string;
  fields: {
    username: {
      stringValue: string;
    };
    email: {
      stringValue: string;
    };
    id: {
      stringValue: string;
    };
  };
}
