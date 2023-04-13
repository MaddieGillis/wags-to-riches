const {Schema, model} = require("mongoose")

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/,"must match valid email address"],
        },
    }
)
