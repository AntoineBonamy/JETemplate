const database = require("../../database")


// Read

const getAllColors = (req, res) => {
    database
        .query("SELECT * FROM colors")
        .then(([colors]) => res.json(colors))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}



module.exports = {
    getAllColors,
}