const path = require('path')
const bodyParser = require('body-parser')
const {MongoClient}  = require('mongodb');
const express = require('express')

const app = new express();

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
    
const uri = "mongodb+srv://AdrianaPerez:Caribe2011*@clustercv.sym5l.mongodb.net/<dbname>?retryWrites=true&w=majority"

MongoClient.connect(uri, function (err, client) {
  if (err) throw err

    app.get('/getInfoPer', (req, res) => {
        client.db("InfoCurricula")
        .collection("PersInfo")
        .findOne({ name: "infopers" })
        .then(r => res.end(JSON.stringify(r)), e => console.error(e));
    })
    app.get('/partOne', (req, res) => {
        client.db("InfoCurricula")
        .collection("Skills")
        .findOne({ name: "SKILLS" })
        .then(r => res.end(JSON.stringify(r)), e => console.error(e));
    })
    app.get('/edu', (req, res) => {
        client.db("InfoCurricula")
        .collection("Education")
        .findOne({ name: "EDUC" })
        .then(r => res.end(JSON.stringify(r)), e => console.error(e));
    })
    app.get('/act', (req, res) => {
        client.db("InfoCurricula")
        .collection("Activities")
        .findOne({ name: "ACTIVITIES" })
        .then(r => res.end(JSON.stringify(r)), e => console.error(e));
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/cv2.jpg', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'cv2.jpg'))
})

app.get('/front.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front.js'))
})

app.listen(4000, ()=>{
    console.log("Server runnign on port 4000")
})

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client, newListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
};

async function findOneListingByName(client, nameOfListing) {
    result = await client.db("InfoCurricula").collection("PersInfo")
                        .findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
        console.log(result['correo']);
        return result;      
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
};







