const express = require("express");
const {
  getTrafficDevices, getTrafficDevice, addTrafficDevice
} = require("../controllers/TrafficDevice.controller");
const router = express.Router();

router.get("/", getTrafficDevices);
router.get("/:deviceId", getTrafficDevice);
router.post("/", addTrafficDevice);

module.exports = router;
