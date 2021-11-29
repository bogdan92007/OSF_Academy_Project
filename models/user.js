var mongoose = require("mongoose");
var crypto = require("crypto");
var uuidv1 = require("uuid");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32

    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true,

    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true})


userSchema.virtual("password")
.set(function(password){
    this._password = password
    this.salt=uuidv1()
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this.password
})

userSchema.methods = {
    encryptPassword: function(password) {
        if(!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch(err) {
            return "something went wrong";
        }
    }
}

var user = mongoose.model("user", userSchema);
module.exports = mongoose.model("user", userSchema);