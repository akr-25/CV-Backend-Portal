const { addPoint, getAllPoint , deletePoint, updatePoint } = require("../controllers/pointController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = require("express").Router();

// Adding a Point thru POST request
router.post("/", requireAuth, addPoint);

router.get("/all", requireAuth, getAllPoint);

router.post("/:pointId/delete", requireAuth, deletePoint);

router.post("/:pointId/update", requireAuth, updatePoint);


module.exports = router;
