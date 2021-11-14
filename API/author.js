const Router = require('express').Router();

const AuthorModel = require("../schema/author");

// Route        - /author
// Description  - to get all authors
// Access       - Public
// Method       - GET
// Parameter    - none
// Body         - none
Router.get("/author", async (req, res) => {
    const getAllAuthors = await AuthorModel.find();
    return res.json(getAllAuthors);
});
  
  // Route        - /author/new
  // Description  - to add new author
  // Access       - Public
  // Method       - POST
  // Parameter    - none
  Router.post("/author/new", (req, res) => {
    const { newAuthor } = req.body;
    AuthorModel.create(newAuthor);
    return res.json({ message: 'Author added to database' });
  });
  
  
  // Route        - /author/delete
  // Description  - to delete an author
  // Access       - Public
  // Method       - DELETE
  // Parameter    - id
  Router.delete("/author/delete/:id", (req,res) => {
    const { id } = req.params;
  
    const filteredAuthors = Database.Author.filter(
      (author) => author.id !== parseInt(id)
    );
  
    Database.Author = filteredAuthors;
  
    return res.json(Database.Author);
  });
  
module.exports = Router;