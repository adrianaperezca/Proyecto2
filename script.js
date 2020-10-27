const path = require('path')
const bodyParser = require('body-parser')
const {MongoClient}  = require('mongodb');
const express = require('express')
const mongoose = require('mongoose');


const app = new express();

//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

async function main(){
    
    const uri = "mongodb+srv://AdrianaPerez:Caribe2011*@clustercv.sym5l.mongodb.net/<dbname>?retryWrites=true&w=majority"

    const client = new MongoClient(uri);
 
    try {
        document.getElementById("infoNombre").innerHTML = "Hola mundo"; 
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);

        await findOneListingByName(client, "infopers");
        document.getElementById('infoNombre').innerHTML = result['Nombre'];
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(4000, ()=>{
    console.log("Server runnign on port 4000")
})

main().catch(console.error);

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
        document.getElementById('infoNombre').innerHTML = result['Nombre'];        

    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
};





