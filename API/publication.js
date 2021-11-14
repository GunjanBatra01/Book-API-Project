const Router = require('express').Router();

const BookModel = require("../schema/book");
const PublicationModel = require("../schema/publication");


// Route        - /publication/delete
// Description  - to delete a publication
// Access       - Public
// Method       - DELETE
// Parameter    - id
Router.delete("/publication/delete/:id", (req,res) => {
    const { id } = req.params;
  
    const filteredPub = Database.Publication.filter(
      (pub) => pub.id !== parseInt(id)
    );
  
    Database.Publication = filteredPub;
  
    return res.json(Database.Publication);
  });
  
  
  // Route        - /publication/delete/book
  // Description  - to delete a book from a publication
  // Access       - Public
  // Method       - DELETE
  // Parameter    - id, isbn
  Router.delete("/publication/delete/book/:isbn/:id", (req,res) => {
    const { isbn, id } = req.params;
  
    Database.Book.forEach((book) => {
      if (book.ISBN === isbn) {
        book.publication = 0;
        return book;
      }
      return book;
    });
  
    Database.Publication.forEach((publication) => {
      if (publication.id === parseInt(id)) {
        const filteredBooks = publication.books.filter(
          (book) => book !== isbn
        );
        publication.books = filteredBooks;
        return publication;
      }
      return publication;
    });
  
    return res.json({ book: Database.Book, publication: Database.Publication });
  });
  

module.exports = Router;