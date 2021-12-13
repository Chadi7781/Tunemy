
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto =require('crypto');


/*Graphql */
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLSchema } = graphql;



const userSchema =new  mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true,


    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    confirmPassword: {
        type: String,
        mapped: false
    },
    picture: {
        type: String,
        trim: true,
        required: false,
        default: null

    },
    universityName: {
        type: String,
        required: true,
    },

    accesstoken: {
        type: String
    },

    resetPasswordLink: {
        data: String,
        default: ""
    },
    reset_password_expires: {
        type: Date
    },
},{
    timeStamp:true

});


//Virtual password
userSchema.virtual('password').set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);

}).get(function () {
    return this._password
})

userSchema.methods = {
    //Generate Salt
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + ""
    },
    //Encrypt password
    encryptPassword : function(password) {
        if(!password) return "";
        try{
            return crypto
                .createHmac("sha1",this.salt)
                .update(password)
                .digest("hex")
        }catch (err) {
            return "";
        }
    },
    //Compare password between plain get from user and hashed
    authenticate: function (plainPassword) {
        return this.encryptPassword(plainPassword) === this.hashed_password
    }
}
module.exports = mongoose.model('user', userSchema);
