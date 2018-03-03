const express = require('express');
const app = express();
const moment = require('moment');
const port = process.env.port || 3000;

app.use('/', express.static('./public'));

app.get('/:id', function (req, res, next) {
    // console.log(req.get('accept-language').split(',')[0]);
    // console.log(req.get('user-agent').match(/\(.*?(?=\))/)[0].slice(1));
    // console.log(req.connection.remoteAddress);
    //console.log(req.params.id);
    const response = {};
    let param = req.params.id;
    console.log(param);
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
    //console.log(moment.unix(param).format("MMMM D, YYYY"))
    res.send(response)
});

app.listen(port);