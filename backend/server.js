
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import userRouter from './routers/userRouter';
import orderRouter from './routers/orderRouter';
import productRouter from './routers/productRouter';
import uploadRouter from './routers/uploadRouter';

const PORT = process.env.PORT || 5000;


// mongoose
//   .connect(config.MONGODB_URL)
//     .then(()=>{ 
//         console.log('connected to mongoDB!');
//     })
 

// .catch((error) =>{
//     // console.log(error.reason);
// })

mongoose.set('strictQuery', false);
const connectDB  =  async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL);
      console.log(`MongoDB Connected!: ${conn.connection.host}`);
    } catch (error){
        console.log(error);
        process.exit(1);

    }
}


const app = express(); 
app.use(cors());
app.use('/api/uploads', uploadRouter)
app.use(bodyParser.json());
app.use('/api/users', userRouter );
app.use('/api/products',productRouter)
app.use('/api/orders', orderRouter);
app.get('/api/paypal/clientId', (req, res)=>{
    res.send({clientId: config.PAYPAL_CLIENT_ID});
});

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')))      
app.use(express.static(path.join(__dirname, '/../frontend')))      
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/index.html'))
})      
app.use((err, req, res,next) =>{
    const status = err.name && err.name ==='validationError' ? 400 : 500;
    res.status(status).send({message: err.message });
});

// app.listen(5000, () => {
//     console.log('Server at http://localhost:5000');
// });
    

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })   
});
