import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import data from './data';
import config from './config';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';
import productRouter from './routers/productRouter';

mongoose
  .connect(config.MONGODB_URL)
    .then(()=>{ 
        console.log('connected to mongodb');
    })
 

.catch((error) =>{
    // console.log(error.reason);
})
const app = express(); 
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRouter );
app.use('/api/products',productRouter)
app.use('/api/orders', orderRouter);
app.get('/api/paypal/clientId', (req, res)=>{
    res.send({clientId: config.PAYPAL_CLIENT_ID});
});

 
app.use((err, req, res,next) =>{
    const status = err.name && err.name ==='validationError' ? 400 : 500;
    res.status(status).send({message: err.message });
});
app.listen(5000, () => {
    console.log('Server at https://localhost:5000');
});
   