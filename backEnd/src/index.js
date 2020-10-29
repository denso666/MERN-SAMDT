const express =  require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();


//      SETTINGS
app.set('port',process.env.PORT || 4000);
app.set('appName',"REST_API -> SAMDT");


//      MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())


//      ROUTES
app.use('/api/employees',require('./routes/Employees.routes'));
app.use('/api/providers',require('./routes/Providers.routes'));
app.use('/api/clients',require('./routes/Clients.routes'));
app.use('/api/raws',require('./routes/Raws.routes'));


//      LISTEN
app.listen(app.get('port'), () =>{
    console.log("\n",app.get('appName'));
    console.log("Server on port: ",app.get('port'));
});