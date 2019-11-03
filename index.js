const app = require('express')();
const config = require('./config/config')();
const port = config.PORT;
const db = require('./database/db');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerDocument = require('./swagger/swagger.json');

//Socket
let socket = require('./socket/index');
 
//Routes
let user = require('./routes/user');
let authenticate = require('./auth/authenticate.js');
let auth = require('./routes/auth');

//Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Auth Middleware
app.use('/api', authenticate);
app.use('/auth', auth);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Middlewares
app.use('/api/user', user);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});