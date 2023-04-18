const db = require("../config/connection");
const { User,Pet } = require("../models");

const userData = require("./userData.json");
const { animals: petsData } = require("./animals.js");

db.once("open", async () => {
  await seedUsers();
  await seedPets();
  process.exit(0);
});

async function seedUsers() {
  await User.deleteMany({});

  await User.insertMany(userData);

  console.log("User seeded!");
}

async function seedPets() {
  await Pet.deleteMany({});
  const petsDataWithImage = petsData.map(pet => {
    return {...pet, image: pet.photos[0].full}
  })
  await Pet.insertMany(petsDataWithImage);

  console.log("Pets seeded!");
}
