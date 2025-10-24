MONGODB PLP_BOOKSTORE COLLECTION

# 📚 insert_books.js - Populate MongoDB with Book Data

This script is designed to insert sample book data into a MongoDB database. It's written in JavaScript using Node.js and the MongoDB Node.js driver.

## 🚀 How it Works

1.  **Import Dependencies:**
    *   `mongodb`: This line imports the necessary MongoDB client from the 'mongodb' package.

2.  **Set Up Connection:**
    *   `uri`:  This variable holds the connection string for your MongoDB instance.  By default, it's set to connect to a local MongoDB server.  **Important:** If you're using MongoDB Atlas (a cloud service), you'll need to replace this with your Atlas connection string.
    *   `dbName`: Specifies the name of the database (e.g., 'plp\_bookstore').
    *   `collectionName`: Specifies the name of the collection where the book data will be stored (e.g., 'books').

3.  **Sample Book Data:**
    *   `books`: An array of JavaScript objects, each representing a book.  Each object contains details like title, author, genre, publication year, price, stock status, pages, and publisher.

4.  **`insertBooks()` Function:**
    *   **Connect to MongoDB:**  The script attempts to connect to the MongoDB server using the provided URI.
    *   **Access Database and Collection:**  It then gets a reference to the specified database and the 'books' collection within that database.
    *   **Drop Existing Collection (if any):** Before inserting new data, the script checks if the 'books' collection already exists. If it does, it drops the existing collection to avoid duplicate data.
    *   **Insert Books:** The `insertMany()` method inserts all the book objects from the `books` array into the collection.
    *   **Display Results:** After insertion, the script displays a confirmation message and lists the titles and authors of the inserted books.
    *   **Error Handling:**  A `try...catch` block handles potential errors during the process, such as connection issues or insertion failures.
    *   **Close Connection:**  Finally, the script closes the MongoDB connection.

5.  **Run the Script:**
    *   The `insertBooks()` function is called, and any errors are caught and logged to the console.

## 💻 Running the Script

1.  **Prerequisites:**
    *   **Node.js and npm:** Make sure you have Node.js and npm (Node Package Manager) installed on your system.
    *   **MongoDB:** You need a running MongoDB instance.  You can run it locally or use a cloud service like MongoDB Atlas.
    *   **MongoDB Node.js Driver:** You'll need to install the MongoDB Node.js driver.  Open your terminal and navigate to the directory where you saved the script, then run:
        ```bash
        npm install mongodb
        ```

2.  **Run the Script:**
    *   Save the code as a `.js` file (e.g., `insert_books.js`).
    *   Open your terminal, navigate to the directory where you saved the file, and run the script using Node.js:
        ```bash
        node insert_books.js
        ```

3.  **Verify the Data:**
    *   After the script runs successfully, you can verify that the data has been inserted into your MongoDB database.  You can use the MongoDB shell or a GUI tool like MongoDB Compass to connect to your database and view the 'books' collection.

## 📝 Example MongoDB Queries

After running the script, you can use these example queries in your MongoDB shell or a MongoDB client to explore the data:

*   `db.books.find()`:  Finds all books in the collection.
*   `db.books.find({ author: "Ben Carson" })`: Finds books by the author "Ben Carson".
*   `db.books.find({ published_year: { $gt: 1990 } })`: Finds books published after 1990.
*   `db.books.find({ genre: "Fiction" })`: Finds books in the "Fiction" genre.
*   `db.books.find({ in_stock: true })`: Finds books that are currently in stock.

🎉 Finally! You've successfully populated your MongoDB database with sample book data.
```