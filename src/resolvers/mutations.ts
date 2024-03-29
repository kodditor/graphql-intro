import { getPrisma } from "../db.js";
import { MutationResolvers } from "../generated/graphql.js";

const db = getPrisma();

export const mutationResolvers: MutationResolvers = {
  /* Create */
  addAuthor: async (_, { name }) => {
    try {
      const result = await db.author.create({
        data: {
          name: name,
          createdAt: new Date().toISOString(),
        },
        include: {
          books: true,
        },
      });
      return {
        code: "201",
        message: "Author created successfully",
        success: true,
        author: result,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while trying to create an author: " + error,
        success: false,
        author: null,
      };
    }
  },

  addBook: async (_, { title, authorId, pubId }) => {
    try {
      const result = await db.book.create({
        data: {
          title: title,
          createdAt: new Date().toISOString(),
          author: {
            connect: {
              id: authorId,
            },
          },
          publisher: {
            connect: {
              id: pubId,
            },
          },
        },
        include: {
          author: true,
          publisher: true,
        },
      });

      return {
        code: "201",
        message: "Book created successfully.",
        success: true,
        book: result,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while trying to create a book: " + error,
        success: false,
        book: null,
      };
    }
  },
  addPublisher: async (_, { name }) => {
    try {
      const result = await db.publisher.create({
        data: {
          name: name,
          createdAt: new Date().toISOString(),
        },
        include: {
          books: true,
        },
      });

      return {
        code: "201",
        message: "Publisher created successfully",
        success: true,
        publisher: result,
      };
    } catch (error) {
      return {
        code: "500",
        message:
          "An error occurred while trying to create a publisher: " + error,
        success: false,
        publisher: null,
      };
    }
  },
  /* Update */
  updateAuthor: async (_, { authorId, input: { name } }) => {
    try {
      await db.author.update({
        where: {
          id: authorId,
        },
        data: {
          name: name,
        },
      });

      return {
        code: "204",
        message: "Author updated successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while updating the resource: " + error,
        success: false,
      };
    }
  },
  updateBook: async (_, { bookId, input: { title, author, publisher } }) => {
    try {
      var updateObj = {};

      updateObj = {
        ...updateObj,
        ...((title != null || "") && { title: title }),
      };
      updateObj = {
        ...updateObj,
        ...((author != null || "") && { author: { connect: { id: author } } }),
      };
      updateObj = {
        ...updateObj,
        ...((publisher != null || "") && {
          publisher: { connect: { id: publisher } },
        }),
      };

      await db.book.update({
        where: {
          id: bookId,
        },
        data: updateObj,
      });

      return {
        code: "204",
        message: "Updated resource successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while updating the resource: " + error,
        success: false,
      };
    }
  },

  updatePublisher: async (_, { pubId, input: { name } }) => {
    try {
      await db.publisher.update({
        where: {
          id: pubId,
        },
        data: {
          name: name,
        },
      });
      return {
        code: "204",
        message: "Updated Publisher successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while updating the resource: " + error,
        success: false,
      };
    }
  },

  /* Delete */
  deleteAuthor: async (_, { authorId }) => {
    try {
      await db.author.delete({
        where: {
          id: authorId,
        },
      });
      return {
        code: "204",
        message: "Author deleted successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while deleting the resource: " + error,
        success: false,
      };
    }
  },
  deleteBook: async (_, { bookId }) => {
    try {
      await db.book.delete({
        where: {
          id: bookId,
        },
      });

      return {
        code: "204",
        message: "Book deleted successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while deleting the resource: " + error,
        success: false,
      };
    }
  },
  deletePublisher: async (_, { pubId }) => {
    try {
      await db.publisher.delete({
        where: {
          id: pubId,
        },
      });

      return {
        code: "204",
        message: "Publisher deleted successfully",
        success: true,
      };
    } catch (error) {
      return {
        code: "500",
        message: "An error occurred while deleting the resource: " + error,
        success: false,
      };
    }
  },
};
