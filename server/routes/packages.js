const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

// router.get("path", fucntion);
router.get("/", ctrl.packages.index);
router.get('/:index', ctrl.packages.show);
router.post('/', ctrl.packages.postPackage);
router.delete('/:index', ctrl.packages.removePackage);
router.put('/:index', ctrl.packages.editPackage);

module.exports = router;
