const mongoose = require("mongoose");

require("dotenv").config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 3330;

mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Error!!!!!");
    console.log(e);
    console.log("Shutting down....");
    process.exit(0);
  });

// const { injectVector } = require("./scripts/injector");

// injectVector();
