require("dotenv").config();
const {
  env: { PORT },
} = process;

const App = require("./server");

App.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
