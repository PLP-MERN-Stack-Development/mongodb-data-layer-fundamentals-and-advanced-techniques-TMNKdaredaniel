// Task 2: Basic CRUD Operations

// Finding all books in a specific genre
 
 db.books.find({ genre: "Folktale" });
 
// Finding books published after a certain year
db.books.find({ published_year: { $gt: 1990 } });

// Finding books by a specific author
db.books.find({ author: "Henry Van Dyke" });

// Updating the price of a specific book
db.books.updateOne(
  { title: "The Shack" },
  { $set: { price: 9.99 } }
);

// Deleting a book by its title
db.books.deleteOne({ title: "The Hiding Place" });

// Task 3: Advanced Queries

// Writing a query to find books that are both in stock and published after 2010

db.books.find(
    { $and: 
        [
            { in_stock: true }, 
            { published_year: { $gt: 2010 } }
        ] 
    }
);

// Using projection to return only the title, author, and price fields in your queries
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Implementing sorting to display books by price (both ascending and descending)
// Ascending Order
db.books.find().sort({ price: 1 });
// Descending Order
db.books.find().sort({ price: -1 });

// Using the `limit` and `skip` methods to implement pagination (5 books per page)

db.books.find().limit(5).skip(0);
db.books.find().limit(5).skip(5);

// Task 4: Aggregation Pipeline

// The average price of books by genre
db.books.aggregate([
{ $group: 
    { 
        _id: "$genre", 
        avgPrice: { $avg: "$price" }, 
    }, 
},
]);

// Finding the author with the most books in the collection
db.books.aggregate([
{ $group: 
    { 
        _id: "$author", 
        bookCount: { $sum: 1 } 
    } 
}, 
{ $sort: { bookCount: -1 } }, 
{ $limit: 1 }
]);

// Grouping books by publication decade and counts them
db.books.aggregate([
{ $group: 
    { 
        _id: { $subtract: [ { $divide: [ "$published_year", 10 ] 
            
        }, 
{ $mod: 
    [ { $divide: [ "$published_year", 10 ] }, 1 ] } 
    ] }, count: { $sum: 1 } } 
}, 
{ $sort: { _id: 1 } }
]);

// Task 5: Indexing

// An index on the `title` field for faster searches
db.books.createIndex({ title: 1 });

// A compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: -1 });

// The `explain()` method used to demonstrate the performance improvement with your indexes
db.books.find(
{ title: "You Were Born Rich" }).explain("executionStats");
