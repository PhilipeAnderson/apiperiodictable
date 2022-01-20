const http = require('http');
const app = require('./index');
const port = process.env.PORT || 3333;

const server = http.createServer(app);

app.listen(port, () => {
  console.log('Started Server')
});