const app = require("./app");

// The below code, require("dotenv"), returns an object, which has the function config(), and invokes it.
// When we invoke that function, dotenv looks at our .env file in root, and is going to add those variables
// to the environment of our server, so that we have access to them.
require("dotenv").config();

// The {process} is our program as it's running right now. A program that we type and aren't running isn't 
// a process. But when we runn the program, the computer starts up a process (which is how it keeps track
// of the fact that the program's running). If you start up a program 5x, it would be 5 different processes.
// The process has the environment, it's where all the variables are. It's like a JS object (key/value pairs) 
// so we can look for the environment .PORT
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => console.log("Listening on port", PORT));