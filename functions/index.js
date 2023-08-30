const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MyYnWSFcPAnkSKrz5lOCZxZYzxWuOVYF8P6u47bg4AV6mDFpaTxzNbjA9Tjfg7cDkqMWetz3OPWaRxVcfxSOpOg00IWnLDJSq"
);

//APP

//APP Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API router
app.get("/", (request, response) => response.status(200).send("Hello World "));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for the amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of the currency
    currency: "inr",
  });

  //ok -creaded
  response.status(201).send({
    clientSecret: paymentIntent.client_Secret,
  });
});

//listen commend
exports.api = functions.https.onRequest(app);

//End-point
//http://127.0.0.1:5001/clone-7acfb/us-central1/api
