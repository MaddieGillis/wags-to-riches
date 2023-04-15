require("dotenv").config({ path: "./../.env" });
const express = require("express");
const db = require("./config/connection");
const fetch = require("node-fetch");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
// import * as server from '@apollo/server';
// const routes = require("./routes");
const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");
const { startStandaloneServer } = require("@apollo/server/standalone");
// npm install apollo-server-express apollo-server-core express graphql

const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");

const { json } = require("body-parser");
const http = require("http");

//routes
const authRoutes = require("./controllers/auth");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes)

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// // server.applyMiddleware({ app });

// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// startStandaloneServer(server, {
//   listen: { port: PORT },
// }).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
app.use(authRoutes);

(async () => {
  await server.start();
    app.use(
      "/graphql",
      cors(),
      json(),
      expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
      })
    );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
})();

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0eFQwdHkzUm5qek1xSHRMQXdLTzFJZDh6VXlmcW9hUGpGaWpXekx6dlE1akVVWW5YRCIsImp0aSI6ImNmZTEwYWRlM2VlYWJmZTE5ZGQ2NWQxNDkzNWZlMmVlOGE3NDAyYzM2YzU0MGM0ZGE4ZjNjNTE2ODM4M2MwNjA1N2E5OWM3ZGFjMjMxYmU3IiwiaWF0IjoxNjgxNDkyOTU2LCJuYmYiOjE2ODE0OTI5NTYsImV4cCI6MTY4MTQ5NjU1Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.zJ1oSxYMxR-oDLqxXHf5OwD4RyDsJxjHdEYFe2nNR4YVlizF-mNIMd_XZi-6W0hbVZdicpAmF0t_lUjLfZ_cPaHtOPbSqGiREC_kQkCgiKCTS90K_TxeMX3ZnupBt_YFbW4J5EixYE1mE4_LZ0agFPqQMqwFYStxsSbCyMFxTsr962B06S2blZUlU3-o9fbxZtEyRDDk_6yhkDlmhYjXhQTaRsd8AikL0_k4rBURFqj7Co0UUYwp4hbKKl4HyEBBFQshO6jO8SKFSZp5xhn7xa27tFbN1ln3lmHZvIvwgLWvnH7alaRfAxJqpqQNumrlneJ0bG433QtvjvMDNlobsg";

app.get("/api/animals", async (req, res) => {
//   // const result = await fetch("https://api.petfinder.com/v2/animals", {
//   //     method: "get",
//   //     headers: {Authentication: 'Bearer ' + TOKEN}
//   //   });

  const headers = { Authorization: "Bearer" + Token }; // auth header with bearer token
  const response = axios("https://api.petfinder.com/v2/animals", {
    headers,
  });
  res.json(response.data);
});

// const data = await result.json();
// console.log("what did i get?", data);

// // fetch was not working, so the data was pasted in here, which still makes the page function.
// res.json(animalsRespose);

// console.log("check");

// app.listen(PORT, () => {
//   console.log(
//     `api server running on PORT ${PORT}\n Open app on http://localhost:${PORT}`
//   );
// });

/*
db.once("open", () => {



    app.listen(PORT, () =>{
        console.log(`api server running on PORT ${PORT}`)
    })
});
*/
