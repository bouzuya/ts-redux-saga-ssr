import express from 'express';


const scriptRootDir = process.env.NODE_ENV === 'production'
  ? ''
  : '//localhost:3001';

const handler = (
  request: express.Request,
  response: express.Response
): void => {
  const html = `
<html>
  <head><title>TITLE</title></head>
  <body>
    <p>Hello</p>
    <script src="${scriptRootDir}/index.js"></script>
  </body>
</html>
  `;
  response.send(html);
};

const config = {
  port: 3000
};

const main = (): void => {
  const app = express();
  const dir = __dirname + '/../../public/';
  app.use(express.static(dir));
  app.use(handler);
  app.listen(config.port);
};

main();
