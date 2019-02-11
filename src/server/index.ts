import express, { Request, Response } from 'express'
// import { renderToString } from 'react-dom/server';
// import { renderToNodeStream } from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom';

const app = express()

app.use(express.static('build'))

function renderHtml() {
  return `
  <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
      <title>React Server Rendering sample</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `
}

app.get('/', (req: Request, res: Response) => {
  const html = renderHtml()
  res.send(html)
})

app.listen(3000)

export default app
