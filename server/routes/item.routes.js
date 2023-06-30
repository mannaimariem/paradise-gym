const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/post",itemController.addPerson);
router.put("/update/:id",itemController.updatePerson);
router.delete("/delete/:id",itemController.deletPerson)
module.exports = router;
