const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

/************ CONSTS  *************/

const DATA_STORE_FILENAME = "./src/dataStore.json";
const port = 4000;
const baseURL = "/api/v1";

/************ INIT  **************/

// unblock cors
app.use(cors());

// enable post body parsing
app.use(express.json());

// load favourites
const dataStore = JSON.parse(fs.readFileSync(DATA_STORE_FILENAME, "utf-8"));

/*********** ROUTES  *************/

// get all listings
app.get(`${baseURL}/listings`, (req: any, res: any) => {
  const payload = [];
  for (const id in dataStore["listings"]) {
    const isFavourite = dataStore["favourites"][id];
    payload.push({ id, isFavourite, ...dataStore["listings"][id] });
  }
  res.json(payload);
});

// get favourites
app.get(`${baseURL}/favourites`, (req: any, res: any) => {
  const favouriteListingIds = Object.keys(dataStore["favourites"]);
  const payload: JSON[] = [];
  favouriteListingIds.forEach((listingId) => {
    const listing = dataStore["listings"][listingId];
    payload.push({ id: listingId, ...listing });
  });
  res.json(payload);
});

// add a favourite listing id
app.post(`${baseURL}/favourites`, (req: any, res: any) => {
  const { listingId } = req.body;
  dataStore["favourites"][listingId] = true;
  fs.writeFileSync(DATA_STORE_FILENAME, JSON.stringify(dataStore));
  res.end();
});

// delete a favourite listing id
app.delete(`${baseURL}/favourites`, (req: any, res: any) => {
  const { listingId } = req.body;
  delete dataStore["favourites"][listingId];
  fs.writeFileSync(DATA_STORE_FILENAME, JSON.stringify(dataStore));
  res.end();
});

// start api service
app.listen(port, () => {
  console.log(`API gateway is listening at http://localhost:${port}`);
});
