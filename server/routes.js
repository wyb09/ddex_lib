import Router from 'koa-router';
import requireDir from 'require-dir';

const controllers = requireDir('./controllers');

export default () => {
  const router = new Router({
    prefix: ''
  });

  router.get('/', function* (next) {
    this.body = 'Hello biatch';
  })

  router.post('/build', controllers.xml_builder.build);
  return router;

}
