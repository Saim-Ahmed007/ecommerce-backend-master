const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    // Destination to store image     
    // destination: function (req, file, cb) {
    //     cb(null, path.join(__dirname, '../public/images'));
    // },
    destination: path.join(__dirname, '../public/images'),
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        const fileName =
            file.originalname
                .replace(fileExtension, "")
                .toLowerCase()
                .split(" ")
                .join("-") +
            "-" +
            Date.now();
        cb(null, fileName + fileExtension);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (
            fileExtension === ".jpg" ||
            fileExtension === ".jpeg" ||
            file.mimetype === "image/png"
        ) {
            cb(null, true);
        } else {
            cb(new Error("only support .png, .jpeg, .jpg formatted file"));
        }
    },
})

module.exports = upload