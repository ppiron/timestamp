const express = require('express');
const app = express();
const moment = require('moment');
const port = process.env.port || 3000;

app.get('/:id', function (req, res, next) {
    console.log(req.get('accept-language').split(',')[0]);
    console.log(req.get('user-agent').match(/\(.*?(?=\))/)[0].slice(1));
    const response = {};
    let param = req.params.id;
    if (parseInt(param, 10)) {
        param = parseInt(param, 10)
        response.natural = moment.unix(param).format("MMMM D, YYYY")
        response.unix = moment.unix(param).unix()
        res.send(response)
        next()
    }
    //console.log(moment.unix(param).format("MMMM D, YYYY"))
    if (moment(param).isValid()) {
        response.natural = moment(param).format("MMMM D, YYYY")
        response.unix = moment(param).unix()
    } else {
        response.natural = null
        response.unix = null
    }
    res.send(response)
    next()
});

app.listen(port);