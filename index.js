// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.use(express.static('frontend/builded'))
app.get('*',(req, res)=>{
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
