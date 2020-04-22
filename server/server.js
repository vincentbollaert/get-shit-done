const express = require('express')
const app = express()
const compression = require('compression')

app.use(compression())
app.use(express.static('../client/public'))

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
