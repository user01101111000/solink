interface IBodyRefreshToken {
  grant_type: string;
  refresh_token: string;
}

interface IRefreshTokenResponse {
  id_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
  token_type: string;
}

export { IBodyRefreshToken, IRefreshTokenResponse };
