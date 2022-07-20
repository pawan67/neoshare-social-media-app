const express = require("express");
const app = express();

const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "QK0VMadgIF1jaA8w4Z2zzjZ1Wd6GlEqU",
  issuerBaseURL: "https://dev-oj5t7xzl.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.listen(3000, () => console.log("Listening on port 3000"));
