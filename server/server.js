// import express from 'express';
// import path from 'path';
// import favicon from 'serve-favicon';
// import dotenv from 'dotenv';

// // Import the router from your routes file
// import eventsRoutes from './routes/events.js';
// import locationsRoutes from './routes/locations.js';

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')));
// } else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'party.png')));
//     app.use(express.static('public'));
// }

// // Specify the API paths for events and locations
// app.use('/api/events', eventsRoutes); // Use events routes for /api/events
// app.use('/api/locations', locationsRoutes); // Use locations routes for /api/locations

// // Serve static files for production
// if (process.env.NODE_ENV === 'production') {
//     app.get('/*', (_, res) =>
//         res.sendFile(path.resolve('public', 'index.html'))
//     );
// }

// app.listen(PORT, () => {
//     console.log(`server listening on http://localhost:${PORT}`);
// });



import express from 'express'
import './config/dotenv.js'
import path from 'path'
import favicon from 'serve-favicon'
import cors from 'cors'
import eventsRouter from './routes/events.js'


// import the router from your routes file




const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.use(express.json())



if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use

//app.use('/api', router)
app.use('/api/events', eventsRouter)





if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})
