const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const destination = require('./Data/destination.json');
// const hotel = require('./Data/hotel.json')

app.use(cors());

app.get('/destination', (req, res) =>{
    res.send(destination);
})


app.get('/destination/:id', (req, res) =>{
    const id = req.params.id;
    const selectedDestination = destination.find(ds => ds.id === id);
    res.send(selectedDestination)
})

app.get('/destination/:id/hotels', (req, res) => {
    const id = req.params.id;
    const selectedDestination = destination.find(ds => ds.id === id);
    const selectedHotels = selectedDestination.hotels;
    res.send(selectedHotels);
});

app.get('/hotels/:hotelId', (req, res) => {
    const hotelId = req.params.hotelId;
    const selectedHotel = destination.reduce((acc, curr) => {
      const hotel = curr.hotels.find(hl => hl.id === hotelId);
      if (hotel) {
        acc = hotel;
      }
      return acc;
    }, null);
  
    if (selectedHotel) {
      res.send(selectedHotel);
    } else {
      res.status(404).send('Hotel not found');
    }
  });
  


app.listen(port, ()=>{

})