const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const uri = "mongodb+srv://ertugrulyalaniz:tWQB4uxTMWyUMGrf@livvery.hdxvllb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
).then(() => console.log('Database connected!'))
    .catch(err => {
        console.log('Failed to connect to MongoDB', err);
    });


// Enable All CORS Requests
app.use(cors());
app.use('/api', apiRoutes)


// define the port number
const port = process.env.PORT || 5555;

// make the server listen on the specified port
app.listen(port, () => console.log(`Server started on port ${port}`));