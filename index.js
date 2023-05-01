const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const destination = require('./Data/destination.json');
const hotel = require('./Data/hotel.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send(destination);
})

app.get('/hotels', (req, res) =>{
    res.send(hotel)
})

app.get('/destination/:id', (req, res) =>{
    const id = req.params.id;
    const selectedDestination = destination.find(ds => ds.id === id);
    res.send(selectedDestination)
})

app.get('/hotels/:id', (req, res) => {
    const id = req.params.id;
    const selectedHotels = hotel.find(hl => hl.id === id);
    res.send(selectedHotels)
})

app.listen(port, ()=>{

})