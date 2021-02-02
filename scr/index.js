const setupServer = require("./server")

const server = setupServer();
const port = process.env.PORT || 9999;
server.listen(9999, () => {
    console.log(`Server running at http://localhost:${port}!`);
});