// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: 'Gifted Hands',
    author: 'Ben Carson',
    genre: 'Autobiography',
    published_year: 1990,
    price: 10.99,
    in_stock: true,
    pages: 240,
    publisher: 'Zondervan'
  },
  {
    title: 'You Were Born Rich',
    author: 'Bob Proctor',
    genre: 'Self-Help',
    published_year: 1997,
    price: 40.31,
    in_stock: true,
    pages: 198,
    publisher: 'LifeSuccess Productions'
  },
  {
    title: 'The Pilgrim\'s Progess',
    author: 'John Bunyan',
    genre: 'Christian',
    published_year: 1678,
    price: 9.69,
    in_stock: true,
    pages: 324,
    publisher: 'Hendrickson'
  },
  {
    title: 'Walden',
    author: 'Henry David Thoreau',
    genre: 'Memoir',
    published_year: 1854,
    price:22.00,
    in_stock: false,
    pages: 352,
    publisher: 'Ticknor and Fields'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Fantasy',
    published_year: 2018,
    price: 23.04,
    in_stock: true,
    pages: 320,
    publisher: 'Random House Business'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C. S. Lewis',
    genre: 'Fiction',
    published_year: 2001,
    price: 14.93,
    in_stock: true,
    pages: 768,
    publisher: 'HarperCollins'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    genre: 'Personal Finance',
    published_year: 2000,
    price: 15.33,
    in_stock: true,
    pages: 336,
    publisher: 'Warner Books'
  },
  {
    title: 'Love Comes Softly',
    author: 'Janette Oke',
    genre: 'Romance',
    published_year: 1979,
    price: 27.12,
    in_stock: true,
    pages: 188,
    publisher: 'Bethany House'
  },
  {
    title: 'Little Rivers',
    author: 'Henry Van Dyke',
    genre: 'Essay',
    published_year: 1908,
    price: 6.99,
    in_stock: false,
    pages: 348,
    publisher: 'Copp Clark Company'
  },
  {
    title: 'The Hiding Place',
    author: 'Corrie Ten Boom',
    genre: 'NonFiction',
    published_year: 1974,
    price: 7.85,
    in_stock: true,
    pages: 242,
    publisher: 'Bantam Books'
  },
  {
    title: 'The Emperor\'s New Clothes',
    author: 'Herman Melville',
    genre: 'Folktale',
    published_year: 1851,
    price: 7.99,
    in_stock: false,
    pages: 48,
    publisher: 'clarion Books'
  },
  {
    title: 'The Shack',
    author: 'William P. Young',
    genre: 'Thriller',
    published_year: 2007,
    price: 20.38,
    in_stock: true,
    pages: 249,
    publisher: 'Hodder & Stoughton'
  }
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 
