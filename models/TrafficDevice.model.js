const { Schema, default: mongoose } = require("mongoose");

const trafficDeviceSchema = new Schema({
    device_name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const TrafficDeviceModel = mongoose.model("traffic_device", trafficDeviceSchema);

module.exports = TrafficDeviceModel