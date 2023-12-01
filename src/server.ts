import  Express  from 'express';

const app = Express();

app.use(Express.json());


app.get('/api/', (req, res) =>  res.json({message: 'deu bom'}));

app.listen(3000, () =>  console.log('listening on port 3000...'));