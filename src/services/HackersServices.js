const connection = require('../config/dbConnector')
const db = connection.makeDb()

module.exports = {
    getHackers : async ()=>{
        let result = await db.query("SELECT id_hacker, first_name, last_name  FROM hackers");
        return result
    },
    getHackerByToken : async (token)=>{
        let result = await db.query("SELECT id_hacker as id, CONCAT(first_name,' ',last_name) as name, token as email FROM hackers WHERE token = ?",[token]);
        return result
    },
    updateHacker : async (token)=>{
        let result = await db.query("UPDATE hackers SET checkin = 1 WHERE token = ?",[token]);
        return result
    }
}