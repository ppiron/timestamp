const express = require('express');
const app = express();
const moment = require('moment');
const port = process.env.PORT || 3000;

app.use('/', express.static('./public'));

app.get('/:id', function (req, res, next) {
    const response = {};
    let param = req.params.id;
    if (Number(param)) {
        param = parseInt(param, 10)
        response.natural = moment.unix(param).format("MMMM D, YYYY")
        response.unix = moment.unix(param).unix()
    } else {
        //console.log(req.params.id);
        if (moment(param).isValid()) {
            response.natural = moment(param).format("MMMM D, YYYY")
            response.unix = moment(param).unix()
        } else {
            response.natural = null
            response.unix = null
        }
    }
    res.send(response)
});

app.listen(port);