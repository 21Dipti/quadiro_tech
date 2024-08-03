const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/quadiro', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
// Route for serving login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
  });
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
