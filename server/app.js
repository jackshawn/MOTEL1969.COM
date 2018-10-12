const Koa = require('koa');

const serve = require('koa-static');

const PORT = 2000;

const app = new Koa();

app.use(serve(__dirname + '/view'));

app.listen(PORT);
console.log('app started at port ' + PORT + '...');
