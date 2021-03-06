const app = require('./config/server'),
	auth = require('./app/routes/AuthRouters'),
	homeTools = require('./app/routes/HomeToolsRouters'),
	connection = require('./config/db');

app.use('/', auth);
app.use('/home', homeTools);

app.listen(app.get('port'), () => {
	console.log('Servidor en el puerto: ', app.get('port'));
});
