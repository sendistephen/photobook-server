import { auth } from 'express-oauth2-jwt-bearer';

const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_DOMAIN;

const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: issuer,
  tokenSigningAlg: 'RS256',
});

export { jwtCheck };
