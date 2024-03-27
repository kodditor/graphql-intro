import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";

const prisma = new PrismaClient();
var authors = [
  {
    id: "a_2a8466db-1986-42f1-afec-41db98066db0",
    name: "Kate Chopin",
    books: ["b_a7463cd8-64ff-41ab-8328-d2d8cedd262d"],
  },
  {
    id: "a_06a93a65-0cb7-433e-bf4a-320c44fdcb15",
    name: "Paul Auster",
    books: [],
  },
];

var books = [
  {
    id: "b_a7463cd8-64ff-41ab-8328-d2d8cedd262d",
    title: "The Awakening",
    author: "a_2a8466db-1986-42f1-afec-41db98066db0",
  },
  {
    id: "b_f3ee3611-a1e3-405b-b968-209e2aab22b7",
    title: "City of Glass",
    author: "",
  },
];

const typeDefs = `#graphql

  interface MutationsResponse {
    code: String!
    message: String!
    success: Boolean!
  }

  type Book {
    id: String,
    title: String,
    author: Author,
  } 

  type AddBookResponse implements MutationsResponse {
    code: String!
    message: String!
    success: Boolean!
    book: Book
  }

  type Author {
    id: String,
    name: String,
    books: [Book]
  }

  type AddAuthorResponse implements MutationsResponse {
    code: String!,
    message: String!,
    success: Boolean!,
    Author: Author
  }


  type Query {
    books: [Book],
    authors: [Author]
  }

  type Mutations {
    addAuthor(name: String): AddAuthorResponse,
    addBook(title: String, authorId: String): AddBookResponse,

  }

`;

const resolvers = {
  Query: {
    books: async () => {
      /*
      const result = [];
      for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const authorIndex = authors.findIndex((a) => a.id == book.author);
        if (authorIndex == -1) {
          result.push({ ...book, author: null });
          continue;
        }
        const author = authors[authorIndex];
        result.push({ ...book, author: { ...author } });
      }
      return result;
    */
      const unprocessedResult = await prisma.books.findMany();
      const result = [];

      for (let i = 0; i < unprocessedResult.length; i++) {
        //const {id_, ...book} = unprocessedResult
        const book = {
          id: unprocessedResult[i].id_,
          title: unprocessedResult[i].title,
          author: authors.find((a) => a.id == unprocessedResult[i].author),
        };
        result.push(book);
      }

      return result;
    },
    authors: async () => {
      const result = [];
      const unprocessedResult = await prisma.authors.findMany();
      /*
      for (let i = 0; i < authors.length; i++) {
        const author = authors[i];
        result.push({
          ...author,
          books: books.filter((b) => b.author == author.id),
        });
      }
    */
      for (let i = 0; i < unprocessedResult.length; i++) {
        const author = {
          id: unprocessedResult[i].id_,
          name: unprocessedResult[i].name,
          books: await prisma.books.findMany({
            where: { id_: { in: unprocessedResult[i].books } },
          }),
        };
        result.push(author);
      }
      return result;
    },
  },
  Mutations: {
    addAuthor: async (name: string) => {
      const newAuthor = {
        id: "a_" + v4(),
        name: name,
        books: [],
      };
      //await prisma.authors.upsert({create: newAuthor})
      return {
        code: "200",
        message: "New author added successfully",
        success: true,
        author: newAuthor,
      };
    },
    addBook: async (title: string, authorId: string) => {
      const authorIndex = authors.findIndex((a) => a.id == authorId);
      if (authorIndex === -1) {
        return {
          code: "404",
          message: "Specified author not found",
          success: false,
          author: null,
        };
      }

      const newBook = {
        id: "b_" + v4(),
        title: title,
        author: authors[authorIndex].id,
      };

      const updatedAuthor = {
        id: authors[authorIndex].id,
        name: authors[authorIndex].name,
        books: [...authors[authorIndex].books, newBook.id],
      };

      authors = authors.filter((a) => a.id != authorId);
      authors.push(updatedAuthor);

      books.push(newBook);
      return {
        code: "201",
        message: "New book added successfully",
        success: true,
        book: newBook,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`Started serving on ${url}`);
