const database = require("../../database")


// Create 

const createOnePoster = (req, res) => {
    const { id_colors } = req.body;

    database
        .query('INSERT INTO posters (posters_text, id_colors) VALUES (?, ?)', ['', id_colors])
        .then(() => res.status(201).send("Poster created"))
        .catch((err) => res.status(500).send("Error creating a new poster", err))
}


// Read

const getAllPosters = (req, res) => {

    database
        .query("SELECT * FROM posters")
        .then(([posters]) => res.json(posters))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

// Update

const updateOnePoster = (req, res) => {
    const postersId = Number(req.params.postersId);
    const { posters_text, id_colors } = req.body;

    database
        .query('UPDATE posters SET posters_text = ?, id_colors = ? WHERE posters_id = ?', [posters_text, id_colors, postersId])
        .then(() => res.send("Poster updated"))
        .catch((err) => res.status(500).send("Error updating poster", err))
}


// Delete

const deleteOnePoster = (req, res) => {
    const postersId = Number(req.params.postersId);

    database
        .query('DELETE FROM posters WHERE posters_id = ?', [postersId])
        .then(() => res.send("Poster deleted"))
        .catch((err) => res.status(500).send("Error deleting poster", err))
}



module.exports = {
    createOnePoster,
    getAllPosters,
    updateOnePoster,
    deleteOnePoster,
}