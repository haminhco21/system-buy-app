
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name!"]
    },
    email: {
        type: String,
        required: [true, "Please add a mail!"],
        unique: true,
        trim: true, //loai bo khang trang co trong day
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please valid email!"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password!"],
        minLenght: [6, "Pass phai co ki tu lon hon 6 "],
        maxLenght: [100, "Pass phai co ki tu nho hon 100 "]
    },
    photo: {
        type: String,
        required: [true, "Please add a photo!"],
        default: ""
    },
    phone: {
        type: String,
        default: "+83"
    },
    bio: {
        type: String,
        default: "bio",
        maxLenght: [250, "Pass phai co ki tu nho hon 250 tu "]
    }
    
}, {
    timestamps: true
})
    //Ma hoa password truoc khi cho len db
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
//Hash(bam) password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next();
})

 

const User = mongoose.model("User", userSchema)
module.exports = User