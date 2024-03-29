import { getPrisma } from "../db.js";
import { QueryResolvers } from "../generated/graphql.js";

const db = getPrisma();

export const queryResolvers: QueryResolvers = {
  /* Get */
  book: async (_, { bookId }) => {
    const result = await db.book.findFirst({
      where: { id: bookId },
      include: {
        author: true,
        publisher: true,
      },
    });
    return result;
  },
  author: async (_, { authorID }) => {
    const result = await db.author.findFirst({
      where: {
        id: authorID,
      },
      include: {
        books: true,
      },
    });
    return result;
  },
  publisher: async (_, { pubId }) => {
    const result = await db.publisher.findFirst({
      where: {
        id: pubId,
      },
      include: {
        books: true,
      },
    });
    return result;
  },

  /* List */
  books: async () => {
    const results = await db.book.findMany({
      include: {
        author: true,
        publisher: true,
      },
    });
    return results;
  },
  authors: async () => {
    const results = await db.author.findMany({
      include: {
        books: true,
      },
    });
    return results;
  },
  publishers: async () => {
    const results = await db.publisher.findMany({
      include: {
        books: true,
      },
    });

    return results;
  },
};
