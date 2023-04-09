require("dotenv").config();
const log = require("./utils/log");

const {
  env: { PORT },
} = process;

const server = require("./server");

server.listen(PORT, () => {
  log(`Server listening on port: ${PORT}`);
});
