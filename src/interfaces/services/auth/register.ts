export interface IRegisterData {
  email: string;
  password: string;
  displayName?: string;
  returnSecureToken: boolean;
}

export interface IRegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  kind?: string;
}

export interface IRegisterValues {
  username: string;
  email: string;
  password: string;
}

export interface ILinkData {
  fields: {
    id: {
      stringValue: string;
    };
    email: {
      stringValue: string;
    };
    username: {
      stringValue: string;
    };
    fullName: {
      stringValue: string;
    };
    location: {
      stringValue: string;
    };
    avatar: {
      stringValue: string;
    };
    about: {
      stringValue: string;
    };
    generated: {
      stringValue: string;
    };
    links: {
      arrayValue: {
        values: [
          {
            mapValue: {
              fields: {
                label: {
                  stringValue: string;
                };
                url: {
                  stringValue: string;
                };
              };
            };
          }
        ];
      };
    };
  };
}
