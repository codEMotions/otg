const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const items = require('./routes/api/items');
const profile = require('./routes/api/profile');
const games = require('./routes/api/games');
const user = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

app.use(express.json());

const db = config.get('mongoURI');
//'mongodb://localhost:27017/otg';

//connect
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('mongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/profile', profile);
app.use('/api/items', items);
app.use('/api/games', games);
app.use('/api/users', user);
app.use('/api/auth', auth);



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));