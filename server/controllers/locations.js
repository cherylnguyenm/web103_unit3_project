import { pool } from '../config/database.js';

// // Function to get all locations
// export const getLocations = async (req, res) => {
//     try {
//         const { rows } = await pool.query('SELECT DISTINCT location FROM events');
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };