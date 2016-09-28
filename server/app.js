import koa from 'koa';
import path from 'path';
import routes from './routes';


const app = koa();
const router = new routes();

app.use(function*(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = {
      status: this.status,
      data: {
        message: err.message
      }
    };
    this.app.emit('error', err, this);
  }
});

app.use(router.routes());

const PORT = process.env.PORT || 9000;
app.listen(PORT, err => {
  process.send && process.send('online');
  console.log(`listening on PORT : ${PORT}`);
})

module.exports = app;
