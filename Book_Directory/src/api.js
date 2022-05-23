const  router  = require('express').Router();
const books = require('./books_dumb');
let bookDirectory = books;
router.get('/books', function(req,res){
   res.send(bookDirectory);
});
router.get('/books/:id', function(req,res){
   const {id} = req.params;
   const book = bookDirectory.find(b=> b.isbn === id);
   if (!book) return res.status(404).send('Book does not exist');
   res.send(book);
});
router.post('/books', function(req,res){
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;

    const bookExist = bookDirectory.find(b => b.isbn === isbn);
    if (bookExist) return res.send('Book already exist');

    const book = {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    };
    bookDirectory.push(book);

    res.send(book);
});
router.put('/books/:id', function(req,res){
    const  {id} = req.params;
    const{
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;
    const book = bookDirectory.find(b=> b.isbn ===id);
    if(!book) return res.send("Book does not exist");
    const updateField = (val, prev) => !val ? prev : val;
    const updateBook = {
        ...book,
        title: updateField(title, book.title),
        isbn: updateField(isbn, book.isbn),
        pageCount: updateField(pageCount, book.pageCount),
        publishedDate: updateField(publishedDate, book.publishedDate),
        thumbnailUrl: updateField(thumbnailUrl, book.thumbnailUrl),
        shortDescription: updateField(shortDescription, book.shortDescription),
        longDescription: updateField(longDescription, book.longDescription),
        status: updateField(status, book.status),
        authors: updateField(authors, book.authors),
        categories: updateField(categories, book.categories),
    };
    const bookIndex = bookDirectory.findIndex(b => b.isbn === book.isbn);
    bookDirectory.splice(bookIndex, 1, updateBook);

    res.status(200).send(updateBook);
});
router.delete('/books/:id', function(req,res){
    const  {id} = req.params;
    let book = bookDirectory.find(b=> b.isbn===id);
    if(!book) return res.status(404).send("Book does not exist");
    bookDirectory =bookDirectory.filter(b=>b.isbn !== id);
    res.send('Success');
});
module.exports = router;