const MongoClient = require('mongodb').MongoClient;
const url         = "mongodb+srv://samclark99:clarkfinancial@clarkfinancial.oyu4g.mongodb.net/clarkfinancial?retryWrites=true&w=majority"
;
let db            = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('myproject');
});

// create a user account in database
function create(name, email, password, balance){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('users');
        balance = parseInt(balance);
        const doc = {name, email, password, balance};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// searches database for matching email and password
function login(email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');        
        collection.find({
            $and: [
                {"email": {$eq: email}}, 
                {"password": {$eq: password}}
            ]
        })
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        }); 
    });   
}

// deposit into database
function deposit(email, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');        
        balance = parseInt(balance);
        collection.updateOne(
                {"email":email}, 
                {$inc: {"balance":balance}},
                function(err, result) {err ? reject(err) : resolve(result);}
            )
    });   
}

// withdraw from database
function withdraw(email, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');        
        balance = -parseInt(balance);
        collection.updateOne(
                {"email":email}, 
                {$inc: {"balance":balance}},
                function(err, result) {err ? reject(err) : resolve(result);}
            )
    });   
}

// find user account balance in database
function balance(email) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');        
        collection.find({"email":email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            }); 
    });   
}

// find user account in database
function find(email){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({email: email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

// all users in database
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}


module.exports = {create, all, deposit, withdraw, balance, login, find};