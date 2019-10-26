const app = require('express')();
const config = require('./config/config')();
const port = config.PORT;
const db = require('./database/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

//Socket
let socket = require('./socket/index');
 
//Routes
let user = require('./routes/user');
let auth = require('./auth/authenticate.js');

//Auth Middleware
app.use('/api', auth);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Middlewares
app.use('/api/user', user);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});