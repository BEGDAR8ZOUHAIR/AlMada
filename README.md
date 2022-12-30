# AlMada
 # Serveur GraphQL avec Node.js et Express / ETL - mongoimport
 
The largest private capital investment fund on the pan-African scene, AL MADA, is digitizing by programming a database management system.
Creates a query execution environment with database data passing through APIs. Facilitates the integration of data processing in a transaction.
Configure a GraphQL server with Node.js and Express.
use express middleware express-graphql .
Learn how to use client-side GraphQL to send queries and mutations to the server.

## Installation
Install the necessary dependencies:
```
npm install express express-graphql graphql
```

# GraphQL Queries & Mutations
## Get names of all clients
```
{
  clients {
    name
  }
}
```

## Get a single client name and email
```
{
  client(id: 1) {
    name
    email
  }
}
```

## Get name and status of all projects
```
{
  projects {
    name
    status
  }
}
```

## Get a single project name, description along with the client name and email
```
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```

## Create a new client and return all data
```
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```

## Delete a client and return id
```
mutation {
  deleteClient(id: 1) {
    id
  }
}
```

## Create a new project and return name and description
```
mutation {
  addProject(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}
```

## Update a project status and return name and status
```
mutation {
  updateProject(status: "completed") {
   name
   status
  }
}
```


## for client side 
```
npm i @apollo/client graphql react-router-dom react-icons
```






