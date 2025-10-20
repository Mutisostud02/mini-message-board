const pool = require('./pool.js')

async function getAllData() {
    try {
        const data = await pool.query("SELECT * FROM messages");
        return data.rows;       
    } catch(error) {
        console.error("Error in getAllData", error);
        throw error;
    }    
}
async function getSenderById(id) {
    try {
        const sender = await pool.query("SELECT sendername, message, timesent FROM messages WHERE id=$1", [id])
        return sender.rows[0];
    } catch(error) {
        console.error("Error in getSenderById", error);
        throw error;
    }
}
async function addNewUser(name, message) {
    try {
        await pool.query("INSERT INTO messages (sendername, message) VALUES ($1, $2)", [name, message]);        
    } catch(error) {
        console.error("Error in AddNewUser", error);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        await pool.query("DELETE FROM messages WHERE id=$1", [id]);
    } catch(error) {
        console.error(error);
        throw error;
    }
}
module.exports = { getAllData, getSenderById, addNewUser, deleteUser };