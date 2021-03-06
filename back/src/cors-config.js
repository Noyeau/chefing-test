const environment = require('./environment')

const whiteList = environment.cors;
 const corsOptions = {
  origin:  (origin, callback) => {
    if(origin === undefined ){
      return callback(null, true);
    }
    if (whiteList.includes('*') || whiteList.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

 module.exports = {
   corsOptions
 }