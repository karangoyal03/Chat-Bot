const express = require('express')
const path = require('path')

const App = express()

App.use('/', express.static(path.join(__dirname, 'public')))

App.listen(5000, () => {
    console.log('server started on http://localhost:5000')
})