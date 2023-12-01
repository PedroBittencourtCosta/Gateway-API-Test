import  Express  from 'express';
import expressHttpProxy from 'express-http-proxy';
import { urlProduct } from './urls';
const app = Express();

app.use(Express.json());

const productServe = expressHttpProxy(urlProduct);

app.get('/api/', (req, res) =>  res.json({message: 'deu bom'}));

app.get('/productTeste', (req, res, next) => productServe(req, res, next));

app.listen(3000, () =>  console.log('listening on port 3000...'));