const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const uri = "mongodb+srv://mern-book-store:92BhAyeZTOR6wru3@cluster0.3emr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const bookCollections = client.db("BookInventory").collection("books");

        app.post("/upload-book", async (req, res) => {
            const data = req.body;
            try {
                const result = await bookCollections.insertOne(data);
                res.status(201).send(result);
            } catch (error) {
                console.error("Failed to upload book:", error);
                res.status(500).send({ error: "Failed to upload book" });
            }
        });

        app.patch("/book/:id", async (req, res) => {
            const id = req.params.id;
            const updateBookData = req.body;
            console.log("Updating book with ID:", id, "New data:", updateBookData);
        
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: { ...updateBookData }
            };
        
            try {
                const result = await bookCollections.updateOne(filter, updateDoc);
                if (result.modifiedCount === 0) {
                    return res.status(404).send({ error: "Book not found or no changes made" });
                }
                res.status(200).send(result);
            } catch (error) {
                console.error("Failed to update book:", error);
                res.status(500).send({ error: "Failed to update book" });
            }
        });

        app.delete("/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            try {
                const result = await bookCollections.deleteOne(filter);
                if (result.deletedCount === 0) {
                    return res.status(404).send({ error: "Book not found" });
                }
                res.status(200).send(result);
            } catch (error) {
                console.error("Failed to delete book:", error);
                res.status(500).send({ error: "Failed to delete book" });
            }
        });

        app.get("/all-books", async (req, res) => {
            try {
                let query = {};
                if (req.query?.category) {
                    query = { category: req.query.category };
                }
                const books = await bookCollections.find(query).toArray();
                res.status(200).send(books);
            } catch (error) {
                console.error("Failed to retrieve books:", error);
                res.status(500).send({ error: "Failed to retrieve books" });
            }
        });

        app.get("/book/:id", async(req,res)=>{
            const id = req.params.id;
            const filter ={_id: new ObjectId(id)};
            const result = await bookCollections.findOne(filter);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. Successfully connected to MongoDB!");
    } catch (error) {
        console.error("An error occurred connecting to MongoDB:", error);
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
