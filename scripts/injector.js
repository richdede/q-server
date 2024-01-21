const fs = require("fs");

const Sector = require("../src/models/sectorsModels");

const insertSector = async (data) => {
  await Sector.create(JSON.parse(data));
  console.log("sectors inserted successfully");
};

exports.injectVector = async () => {
  await fs.readFile(
    `${__dirname}/../dummyData/sectors.json`,
    "utf-8",
    (err, data) => {
      if (err) console.log(err);
      console.log(data);
      insertSector(data);
    }
  );
};
