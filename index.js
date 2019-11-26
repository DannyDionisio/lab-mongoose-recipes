const mongoose = require("mongoose");

// Import Recipe model
const Recipe = require("./models/Recipe");

// Import data
const data = require("./data.json");

const MONGODB_URI = "mongodb://localhost/recipeApp";

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
    //Create Recipe
    Recipe.create({
      title: "Chicken with roast potatoes",
      level: "Easy Peasy",
      ingredients: ["chicken", "potatoes", "vegetables", "spice"],
      cuisine: "Portuguese",
      dishType: "Dish",
      image:
        "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/r/800/roasted-chicken-and-potatoes-with-rosemary.jpg",
      duration: "45",
      creator: "Daniela Dionisio"
    });

    return "asd";
  })
  .then(test => {
    return Recipe.insertMany(data);
  })
  .then(documents => {
    console.log("Data inserted", documents.length);
  })
  .then(() => {
    return Recipe.updateOne(
      { title: "Rigatoni alla Genovese" },
      { $set: { duration: 100 } }
    );
  })
  .then(documents => {
    console.log("Data updated", documents);
  })
  .then(() => {
    return Recipe.deleteOne({ title: "Carrot Cake" });
  })
  .then(documents => {
    console.log("Data deleted", documents);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
