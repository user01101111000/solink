interface IAuthContext {
  toks: ITOK | null;
  login: (tokens: { so_i: string; so_r: string }) => void;
  logout: () => void;
}

interface IAuthContextProvider {
  children: React.ReactNode;
}

interface ITOK {
  so_i: string;
  so_r: string;
}

export { IAuthContext, IAuthContextProvider, ITOK };
