
const { MongoClient, ServerApiVersion, ListCollectionsCursor } = require('mongodb');
const creds = require('./static/credentials')
const uri = `mongodb+srv://${creds.username}:${creds.password}@${creds.cluster}/?retryWrites=true&w=majority`;
const mongoose = require('mongoose')
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
    (err,res) => {
    if(err)
        console.log(err);
    if(res)
        console.log("Connnection Established");
})

// async function fetchData(){

//     try{
//         await client.connect()
    
//         await listDatabases(client)

//         await getData(client)
//     } catch(e){
//         console.log(e);
//     } finally {
//         await client.close()
//     }
// }

// async function listDatabases(client) {
//     const dbList = await client.db().admin().listDatabases();
//     console.log("Databases: ");
//     dbList.databases.forEach(db => {
//         console.log(` - ${db.name}`);
//     });
// }

// async function getData(client,cb){
//     const db = await client.db("Wealth-Portfolio")
//     const collection  = await db.collection('Users')
//     console.log(collection);
//     console.log("Users Data: ");

//     collection.find({}).toArray(function(err, result) {
//         // if (err) throw err;
//         console.log(result);
//         // db.close();
//     });

// }

// module.exports = fetchData

