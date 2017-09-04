var mongoose = require('mongoose');

mongoose.connect('mongodb://practice1:superheroes@ds119044.mlab.com:19044/haris_practice', {
    useMongoClient: true
    /* other options */
});


var userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    number: Number
})

var userModel = mongoose.model("Userdetails", userSchema)

// save user 

// var users = new userModel({ number: 12345, name: 'Haris', email: "haris@gmail.com" });
// users.save(function (err, data) {
//     if (!err) {
//         console.log("RESponSE ", data)
//     } else {
//         console.log("ERROR", err)
//     }
// })



// Find data

// userModel.where({name : "Haris",email : 'haris@gmail.com'}).findOne(function (err, user) {
//     if (err) return handleError(err);
//     if (user) {
//         console.log(user.id)
//         // doc may be null if no document matched
//     }
// });


// Update data

// userModel.where({name : "Haris"}).update({email : "mughal12345@gmail.com"},function (err, user) {
//     if (err) return handleError(err);
//     if (user) {
//         console.log(user)
//         // doc may be null if no document matched
//     }
// });



// find and delete

userModel.findOne({ name:"Mughal" }, function (err, user) {
    if (err) return handleError(err);
    if (user) {
        console.log(user)
        user.remove(function (err, removed) {
            if (!err) {
                console.log("Remove Item", removed)
            } else {
                console.log("Error", err)
            }
        })
        console.log(user)
        // doc may be null if no document matched
    }
});





// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});