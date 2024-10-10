// import { pool } from '../config/database.js';

// // Function to get all events
// export const getEvents = async (req, res) => {
//     try {
//         const { rows } = await pool.query('SELECT * FROM events');
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Function to get events by location
// export const getEventsByLocation = async (req, res) => {
//     const { location } = req.params;
//     try {
//         const { rows } = await pool.query('SELECT * FROM events WHERE location = $1', [location]);
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getEventById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const { rows } = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
//         if (rows.length === 0) {
//             return res.status(404).json({ message: 'Event not found' });
//         }
//         res.status(200).json(rows[0]);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}



export default {
    getEvents
}