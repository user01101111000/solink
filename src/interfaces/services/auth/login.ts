export interface ILoginData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface ILoginResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName?: string;
  email?: string;
  registered?: boolean;
  kind?: string;
}

export interface ILoginValues {
  email: string;
  password: string;
}
