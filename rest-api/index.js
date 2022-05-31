let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');
mongoose.Promise = global.Promise
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log("db connected successfully")
    },
    error => {
        console.log('Database error:' + error)
    }
)
//making port and server
const bookRoute = require("./node-backend/routes/book.routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
// Now Create Static path
app.use(express.static(path.join(_dirname, 'dist/crud')));
// API Root
app.use('/api',bookRoute);
// PORT Create
const port = process.env.port || 8000;
app.listen(port, () => {
    console.log('Listening Port on:' + port);
})