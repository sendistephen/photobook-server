import { expressjwt as jwt } from 'express-jwt';
import jwks from 'jwks-rsa';

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-5h0ossfj.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://mybeautifulserver.com',
  issuer: 'https://dev-5h0ossfj.us.auth0.com/',
  algorithms: ['RS256'],
});

export { jwtCheck };
