// Import schema, model and bcryprt
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Import movie schema from Movie.js
    //? commented out because schema has not been created
// const movieSchema = require('./Movie');

// Schema/model for user
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        // set savedMovies to be an array of data that corresponds with the movieSchema
            //? commented out because schema has not been created
        // savedMovies: [movieSchema],
    },
    // set to use virtuals
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// method to hash password
userSchema.pre('save', async function(next) {
    
    // if new password or modified password, hash the password
    if (this.isNew || this.isModified('password')) {
        // set salt rounds
        const saltRounds = 10;

        // hash the password
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// method to compare and validate password when logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

//TODO: Create method that returns length of saved movies array for a specific user, when querying that specific user


const User = model('User', userSchema);

module.exports = User;
