const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo I updated this tho!')
})
app.all('/api/test', (req, res) => {
    console.log("Calling the test api route with some test JSON data")
    res.status(200).json(
        [{
            id: '1',
            event_name: 'Checklist Planning Lucky',
            event_date: '2023-03-03'
        },
        {
            id: '2',
            event_name: 'Organically Main Memories',
            event_date: '2023-03-04'
        },
        {
            id: '3',
            event_name: 'Classy Planning',
            event_date: '2023-03-03'
        },
        {
            id: '4',
            event_name: 'Crystal Functions',
            event_date: '2023-03-04'
        },
        {
            id: '5',
            event_name: 'Eventage Season',
            event_date: '2023-03-03'
        },
        {
            id: '6',
            event_name: 'Eventistry All Moment',
            event_date: '2023-03-04'
        },
        {
            id: '7',
            event_name: 'Entertainment Productions',
            event_date: '2023-03-03'
        },
        {
            id: '8',
            event_name: 'The Event Live Eventments',
            event_date: '2023-03-04'
        },
        {
            id: '9',
            event_name: 'Organization Eventualities',
            event_date: '2023-03-03'
        },
        {
            id: '10',
            event_name: 'Oh How Running Services',
            event_date: '2023-03-04'
        }]
    )
})
app.listen(process.env.PORT || 3000)