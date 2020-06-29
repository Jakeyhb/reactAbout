const HttpProxyMiddleware = require('http-proxy-middleware');


module.exports = function (app) {
  // ...

  app.use(
    '/ajax',
    HttpProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/maoyanshlist',
    HttpProxyMiddleware({
      target: 'https://show.maoyan.com/maoyansh/myshow/ajax/performances/0;st=4;p=1;s=10;tft=0?sellChannel=13&cityId=1&lng=0&lat=0',
      changeOrigin: true
    })
  );


  app.use(
    '/maoyandklist',
    HttpProxyMiddleware({
      target: 'https://show.maoyan.com/maoyansh/myshow/ajax/celebrityBasicList/query?uuid=g7cnvb1ubu85gcfjc4a9f2jui2f8fzayqgdmlny5nsxm4cnnjvb0p9u6tz9pl5nu&clientType=1&os=1&sellChannel=13&cityId=1&lng=0&lat=0',
      changeOrigin: true
    })
  );
  app.use(
    '/bannerimg',
    HttpProxyMiddleware({
      target: 'http://116.62.207.144:10000/mock/5dc0e805c9b21d000aa729b0/bannerimgsrc',
      changeOrigin: true
    })
  )
};