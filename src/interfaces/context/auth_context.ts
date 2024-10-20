export interface IAuthContext {
  toks: ITOK | null;
  login: (tokens: { so_i: string; so_r: string }) => void;
  logout: () => void;
}

export interface IAuthContextProvider {
  children: React.ReactNode;
}

export interface ITOK {
  so_i: string;
  so_r: string;
  so_id: string;
}
