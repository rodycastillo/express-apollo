const express = require('express')
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { ApolloServer } = require('apollo-server-express')
const { config } = require('dotenv')
const { connectDB } = require('./db')
config()


const app = express()
connectDB()
module.exports = app

app.get('/', (req, res) => res.send("Welcome to my api"))

async function start() {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app})

    app.use('*', (req, res)=>res.status(404).send("page not found"))

    app.listen(process.env.PORT , ()=> {
        console.log('Server on port 3000')
    })
}
start()
