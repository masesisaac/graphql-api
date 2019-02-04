require('dotenv').config()
const Koa = require('koa');
const schema = require('./graphql/schema');
const graphqlHTTP = require('koa-graphql');
const mount = require('koa-mount');
const initDB = require('./model/database')();

const app = new Koa();
const port = process.env.PORT || 9000;

app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})))

app.listen(port, () => {
    console.log('Server running on port '+port);
});

app.on('error', err => {
  log.error('server error', err)
});
