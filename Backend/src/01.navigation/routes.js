const express = require("express");
const router = express.Router();


const postersController = require("../02.controllers/posters.controller");
const colorsController = require("../02.controllers/colors.controller");



/* ------------------------------------------------------------------------
Routes Posters
------------------------------------------------------------------------- */

router.get("/posters", postersController.getAllPosters)
router.post("/posters", postersController.createOnePoster)
router.put("/posters/:postersId", postersController.updateOnePoster)
router.delete("/posters/:postersId", postersController.deleteOnePoster)




/* ------------------------------------------------------------------------
Routes colors
------------------------------------------------------------------------- */

router.get("/colors", colorsController.getAllColors)


module.exports = router