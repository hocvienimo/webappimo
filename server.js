// import express from "express";
// const app = express();

// const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   return res.status(200).send({
//     message: "Hello World!",
//   });
// });

// app.listen(port, () => {
//   console.log("Listening on " + port);
// });

// module.exports = app;


import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV
    }`
  )
})