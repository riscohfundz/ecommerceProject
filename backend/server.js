import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
app.use(cors());
const port = 5000;
 
app.get("/api/products", (req, res) => {
 res.send(data.products);
});

app.get('/appi/products/:id', (req, res) =>{
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
       res.send(product);
    }else{
       res.status(404).send({message: 'Product Not Found!'});
    }
});
app.listen(port, () => {
    console.log('Server at https://localhost:5000');
});
   