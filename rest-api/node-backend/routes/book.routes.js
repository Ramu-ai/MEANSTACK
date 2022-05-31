// now here i , m going to create routes Please watch carefully this part is very important
const express = require('express');
const app = express();
const bookRoute = express.Router(); // this module is very important
let book = require("./node-backend/model/book.js");

// Add Book for store
bookRoute.route('/add-book').post((req, res, next) => {
    book.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});
// get all Book from Store
bookRoute.route('/').get((req, res) => {
    book.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
})
//same as like this all
//get book by id
bookRoute.route('/read-book/:id').get((req, res) => {
    book.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});
// Update Book store
bookRoute.route('/update-book/:id').put((req, res, next) => {
    book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log(' Book updated successfully ! ')
        }
    })
})
// Delete Book store
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
    book.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
//dont forget to export module
module.exports = bookRoute;
