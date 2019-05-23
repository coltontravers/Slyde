const express = require("express");

const server = express();

server.listen(3000, () =>
    console.log("Slyde express server listening on port 3000!")
);
