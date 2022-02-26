const { gql } = require('apollo-server-express')
const typeDefs =  gql`

    # Consultar Datos
    type Task {
        id: ID
        title: String
        description: String
    }

    type Query {
        hello: String
        getAllTasks: [Task]
        getTask(id: ID) : Task
    }
    # Mutar Datos
    input TaskInput {
        title: String
        description: String
    }
    type Mutation {
        createTask(task: TaskInput!) : Task
        deleteTask(id: ID!) : String
        updateTask(id: ID!, task: TaskInput): Task
    }
`

module.exports = {typeDefs};