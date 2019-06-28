const expressJwt = require('express-jwt');
const config = require('../myconfig.json');


module.exports = jwt;


function jwt() {
    
    const secret = config.secret;    
    
    
    return (expressJwt({ secret,  credentialsRequired: true, getToken: function from(req)  {
      
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
      
          return req.query.token;
        }
      
        return null;
      }  }).unless({
        path: [
            // public routes that don't require authentication
            '/routes/get',
            '/users/authenticate',
            '/users/register',
            '/users/getuserbyuid',
            '/users/saveuserinfo',
            '/users/getuserinfobyid',
            '/users/socialauthenticate',
            '/users/registersocial',
            '/users/getpdf/:url',
            { url: /^\/users\/getpdf\/.*/, methods: ['GET'] }
        ]
    }));
}

