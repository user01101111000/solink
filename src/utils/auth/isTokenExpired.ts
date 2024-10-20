export default function isTokenExpired(token: string) {
  const tokenPayload = JSON.parse(atob(token.split(".")[1]));

  const now = Math.floor(Date.now() / 1000);

  return now > tokenPayload.exp;
}
