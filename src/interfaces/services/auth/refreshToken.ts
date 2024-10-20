export interface IBodyRefreshToken {
  grant_type: string;
  refresh_token: string;
}

export interface IRefreshTokenResponse {
  id_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
  token_type: string;
}
