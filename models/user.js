
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name !"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email !"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },
    about: {
        type: String,
        default: "Write something about you."
    },
    social: {
        type: [Object],
        default: [
            {
                social: "",
                link: "",
                id: 0
            }
        ]
    },
    objective: {
        type: String,
        default: "write anything about you career and job career."
    },
    qualification: {
        type: [Object],
        default: [
            {
                education: "",
                organization: "",
                start: "",
                end: "",
                result: "",
                description: "",
                id: 0
            }
        ]
    },
    image: {
        type: [Object],
        default: [
            {
                public_id: "",
                url: "", 
                id : 0
            }
        ]
    },
    dob: {
        type: String,
        default: "18th, May, 1994"
    },
    profession: {
        type: String,
        default: "Front End Developer"
    },
    status: {
        type: String,
        default: "Unmarried"
    },
    number: {
        type: Number,
        required: [true, "Please enter your mobile number !"],
        minlength: [10, "Number must have 10 digits !"],
        maxlength: [10, "Number must have 10 digits !"]
    },
    course: {
        type: [Object],
        default: {
            course: "",
            start: "",
            end: "",
            organization: "",
            result: "",
            description: "",
            id: 0
        }
    },
    experience: {
        type: [Object],
        default: [
            {
                company: "",
                start: "",
                end: "",
                designation: "",
                salary: "",
                description: "",
                id: 0
            }
        ]
    },
    skill: {
        type: [Object],
        default: [
            {
                skill: "",
                level: 0,
                id: 0
            }
        ]
    },
    other_skill : {
        type : [Object],
        default : [
            {
                skill : "",
                level : 0,
                id : 0
            }
        ]
    },
    language: {
        type: [Object],
        default: [
            {
                language: "",
                level: 0,
                id: 0
            }
        ]
    },
    project: {
        type: [Object],
        default: {
            project_name: "",
            project_category: "",
            project_url: "",
            project_description: "",
            url: "",
            public_id: "",
            id: 0
        }

    },
    address: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: "India"
    },
    state: {
        type: String,
        default: "Delhi"
    },
    city: {
        type: String,
        default: "New Delhi"
    },
    pincode: {
        type: Number,
        default: 110019
    },
    role: {
        type: String,
        default: "user"
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    };

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (oldPassword) {
    let isPasswordMatch = await bcrypt.compare(oldPassword, this.password);
    return isPasswordMatch;
}

userSchema.methods.generateWebToken = async function () {
    let key = "uurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"
    let token = jsonwebtoken.sign({ id: this._id }, key, { expiresIn: "30d" });
    return token;
}

const User = new mongoose.model("user", userSchema)


module.exports = User

