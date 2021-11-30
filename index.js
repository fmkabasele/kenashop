const express = require('express')


const app = express();

app.get('/',  (req, res) => {
    res.send(
        'Welcome to Cox Automotive Franck Kabasele 🥺'
    )
})

app.listen(3000, () =>
console.log('app up and running my boy')
)