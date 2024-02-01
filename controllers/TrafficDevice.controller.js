const TrafficDeviceModel = require("../models/TrafficDevice.model");

async function getTrafficDevices(req, res, next) {
    try {
        const carts = await TrafficDeviceModel.find({})
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}

async function getTrafficDevice(req, res, next) {
    try {
        const { deviceId } = req.params || {};
        const cart = await TrafficDeviceModel.findById(deviceId)
        res.status(200).json(cart)
    } catch (error) {
        next(error)
    }
}

async function addTrafficDevice(req, res, next) {
    try {
        const { device_name, count } = req.body;

        const newTrafficDevice = new TrafficDeviceModel({
            device_name, count
        })

        await newTrafficDevice.save()


    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTrafficDevices, getTrafficDevice, addTrafficDevice
}