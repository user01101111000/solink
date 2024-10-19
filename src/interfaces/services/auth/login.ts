interface ILoginData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface ILoginResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName?: string;
  email?: string;
  registered?: boolean;
  kind?: string;
}

interface ILoginValues {
  email: string;
  password: string;
}

export { ILoginData, ILoginResponse, ILoginValues };
