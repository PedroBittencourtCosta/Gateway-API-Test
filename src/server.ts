
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware(
    { 
        target: 'http://localhost:8080/',
        pathRewrite: {
            '/api': ''
        },
       
    }));
app.listen(3000);