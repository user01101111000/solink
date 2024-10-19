interface IRegisterData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface IRegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  kind?: string;
}

interface IRegisterValues {
  email: string;
  password: string;
}

export { IRegisterData, IRegisterResponse, IRegisterValues };
