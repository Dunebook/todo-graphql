import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
    updateTodo(id: Int!, text: String!, completed: Boolean!): Todo
    deleteTodo(id: Int!): Boolean
  }
`;

let todos = [
  {
    id: 0,
    text: 'Hello from GraphQL',
    completed: false,
  },
];

const resolvers = {
  Query: {
    getTodos: () => todos,
  },
  Mutation: {
    addTodo: (_, { text }) => {
      const newTodo = { id: todos.length, text, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
    updateTodo: (_, { id, text, completed }) => {
      const index = todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        todos[index] = { id, text, completed };
        return todos[index];
      }
      return null;
    },
    deleteTodo: (_, { id }) => {
      const index = todos.findIndex(todo => todo.id === id);
      if (index === -1) return false;
      todos.splice(index, 1);
      return true;
    },
  },
};

export { typeDefs, resolvers };
