var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

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

module.exports = {
  jwtCheck,
};
