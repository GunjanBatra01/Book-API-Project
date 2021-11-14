// Temporary Database

let Book = [
  {
    ISBN: "12345ONE",
    title: "Getting started with MERN",
    authors: [1, 2],
    language: "en",
    pubDate: "2021-07-07",
    numOfPages: 225,
    category: ["fiction", "programming", "tech", "web dev"],
    publication: 1,
  },
  {
    ISBN: "12345Two",
    title: "Getting started with Python",
    authors: [1],
    language: "en",
    pubDate: "2021-07-07",
    numOfPages: 225,
    category: ["fiction", "tech", "web dev"],
    publication: 1,
  },
];

let Author = [
  {
    id: 1,
    name: "Gunjan",
    books: ["12345ONE", "12345Two"],
  },
  {
    id: 2,
    name: "Tanya",
    books: ["12345ONE"],
  },
  {
    id: 3,
    name: "Vaibhav",
    books: [],
  },
];

let Publication = [
  {
    id: 1,
    name: "Chakra",
    books: ["12345ONE"],
  },
  {
    id: 2,
    name: "Elon Publications",
    books: [],
  },
];

module.exports = { Book, Author, Publication };