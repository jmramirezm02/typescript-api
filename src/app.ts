import express = require("express");

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 8080);

// API Endpoints
app.get('/', (req, res) => {
    res.send("Hello");
});

// export our app
export default app;