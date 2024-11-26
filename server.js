const express = require("express")
const morgan = require("morgan")
const app = express();


const port = 2024

app.get("/api-health", (req, res) => res.send("Everything is working fine!"))
app.post("/get-data", (req, res) => res.send("User data"))

const server = app.listen(port, async () => {
    console.log(`server listening on port ${port}`)
})



module.exports = { app, server };